/* eslint-disable react/prop-types */
import { createContext, useContext, useMemo, useState, useEffect } from "react";
import instance from "../services/axios";
import Swal from "sweetalert2";
//สร้าง context
const AuthContext = createContext();

//สร้าง Provider component
const AuthProvider = ({ children }) => {
  //กำหนด state สำหรับ storeName
  const [user, setUser] = useState(null);

  // //ใช้ useEffect เพื่อตรวจสอบสถานะ Authentication
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const res = await instance.post("/refresh");
        if (res.status === 200) {
          localStorage.setItem("user", JSON.stringify(res.data.user));
        }
      } catch (error) {
        localStorage.clear();
        return;
      }
    };
    checkAuthStatus();
  }, []);

  //กำหนดฟังก์ชัน loginStore และ logoutStore
  const login = async (payload) => {
    try {
      const res = await instance.post("/login", payload);

      if (res.status === 200) {
        setUser(res.data.user);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        window.location.href = "/sale-products";
      } else if (res.status === 401) {
        Swal.fire({
          icon: "error",
          title: "เกิดข้อผิดพลาด",
          text: res.data.msg,
        });
      }
    } catch (error) {
      localStorage.clear();
      Swal.fire({
        icon: "error",
        title: "เกิดข้อผิดพลาด",
        text: "มีบางอย่างผิดพลาด กรุณาลองใหม่อีกครั้ง",
      });
    }
  };

  const logout = async () => {
    try {
      await instance.delete("/logout");
      setUser();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const contextValue = useMemo(
    () => ({ user, login, logout }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [user]
  );

  //ให้ Provider component ทำหน้าที่ส่งค่า context ไปยัง child components
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

//สร้าง custom hook เพื่อให้ง่ายต่อการใช้ context ใน components อื่น ๆ
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  return useContext(AuthContext);
};

//ส่งออก AuthProvider เป็น default
export default AuthProvider;
