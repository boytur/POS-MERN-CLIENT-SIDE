# POSYAYEE
#### POSYAYEE คืออะไร ?
> Point Of Sale + Yayee (ยาหยี)
    เป็นระบบจัดการหน้าร้านที่สามารถสแกนบาร์โค้ดเพื่อขายสินค้าซึ่งระบบไม่ได้ซับซ้อนมากเนื่องจากมีการออกแบบมาให้สามารถใช้งานง่ายโดยมี Requirement มาจากปัญหาการใช้งานระบบขายของชำทั่วไปจากทางบ้านของเจ้าของโปรเจค ในที่นี้ขอแทนด้วยสรรพนามว่า "ลูกค้า" 
โดยปัญหาคือ "เราไม่สามารถที่จะรู้ได้ว่าของในร้านใกล้จะหมดตอนไหน จะรู้อีกทีก็ตอนคนมาถามซื้อซึ่งเป็นประสบการณ์ที่แย่สำหรับลูกค้า เลยอยากมีวิธีจัดการกับปัญหานี้เช่นมีโปรแกรมที่สามารถคอนโทรลของในร้านได้"และฝั่งลูกค้ายังกล่าวเพิ่มเติมอีกว่า เคยเห็นระบบคล้ายๆกันในราคา 3,000 - 20,000 บาท ถือว่าราคาค่อนข้างราคาสูงสำหรับร้านค้าของชำเล็กๆ ทางเจ้าของโปรเจคจึงได้เสนอแนวทางการแก้ปัญหาด้วยการอาสาพัฒนาซอฟต์แวร์เพื่อจัดการปัญหาในรูปแบบเว็บแอพพลิเคชันซึ่งส่วนตัวคิดวาเป็น tool ที่ไม่ได้เหมาะสมมากนักเนื่องจาก tool ที่ใช้เป์น [MERN Stack](https://medium.com/nexthopthai/mern-stack-%E0%B8%84%E0%B8%B7%E0%B8%AD%E0%B8%AD%E0%B8%B0%E0%B9%84%E0%B8%A3-e651592206ce) ซึ่งเมื่อเราใช้ฐานข้อมูลฟรีความเร็วอาจจะไม่ได้มากนัก และเวลา Deploy หากทำให้ใช้แค่ offline ก็สามารถรัน API ผ่าน [PM2](https://pm2.keymetrics.io/) ได้ แต่ไม่สามารถออนไลน์ได้ ส่วนฝั่ง Front-end สามารถเอาไปฝากไว้ที่ [Netlify](https://www.netlify.com/) ซึ่งมีให้ใช้ฟรี 100GB bandwidth โดยระบบในเวอร์ชัน 1.0.0  ยังขาดฟังก์ชันหลายอย่างเช่น การเพิ่มประเภทสินค้า และการ sort การแสดงสินค้าต่างๆ โดยระบบหลักๆมีดังนี้
 - ขายของหน้าร้าน (หน้า 1 )
   - กดขายสินค้าด้วยมือจากหน้าหลักโดยสินค้าที่ขายได้คือสินค้าที่ไม่มีบาร์โค้ดและสินค้าที่ไม่สามารถนับจำนวนได้เช่น การขายนํ้าแข็งแยกเป็นถุง
   - สแกนบาร์โค้ดจากเครื่องสแกนแบบ USB และสามารถที่จะ Plug and play ได้ไม่ต้องตั้งค่าใดๆเพิ่ม
   - ค้นหาสินค้าทั้งมีและไม่มีบาร์โค้ดเพื่อกดเพิ่มเข้าหน้าการขายได้
   - มีการเก็บข้อมูลจากยอดขายในแต่ละวันเพื่อนำไปวิเคราะห์ยอดขาย
- ดูสต็อกสินค้า (หน้า 2)
  - ดูสินค้าที่ใกล้จะหมดได้และสินค้าทั้งหมดภายในร้าน
  - แก้ไขสินค้าในสต็อก
  - ลบสินค้าในสต็อก
- เพิ่มสต็อกสินค้า (หน้า 3)
  - เพิ่มสินค้าใหม่เข้าไปในร้านด้วยการสแกนบาร์โค้ดและเพิ่มสินค้าที่ไม่มีบาร์โค้ด
  - เพิ่มจำนวนสินค้าเดิมเข้าไปในร้านด้วยการสแกนบาร์โค้ดและการเพิ่มจำนวนสินค้าที่ไม่มีบาร์โค้ดด้วยการค้นหาจากชื่อและเพิ่มจำนวนได้
- วิเคราะห์ยอดขาย(หน้า 4)
  - ดูยอดขายของวันนี้
  - ดูยอดขายของเมื่อวาน
  - ดูยอดขายของ 30 วันที่แล้ว
  - ดูยอดขายของ 7 วันที่แล้ว
  - แสดงกราฟความแตกต่างของยอดขาย 7 วันย้อนหลังเป็นแบบแผนภูมิแท่งและกราฟเส้น
 - ระบบอื่นๆ
    - การแจ้งเตือนในทุก 20.00 น.ในไลน์ Notify เพื่อระบบยอดขายในแต่ละวันและสินค้าที่ใกล้จะหมดจะได้ง่ายต่อการซื้อของมาเติมในสต็อก
    - ระบบล็อกอิน มีไว้เพื่อไม่ให้เข้าถึงหน้าร้านและทำความเสียหาต่อร้สนเนื่องจากสามารถที่จะกดขายสินค้าในหน้าเว็บได้ อาจจะมีการเกรียนกันเกิดขึ้น


### เครื่องมือที่ใช้
#### Design and Prototype
- Figma
### Front-end 
- React.js 
- Tailwind css
### Back-end 
- Node.js 
- Expressjs
- MongoDB (NoSQL Database)
### Build and Deploy
- [Netlify](https://www.netlify.com/) (Front-end)
- [PM2](https://pm2.keymetrics.io/) (เวลาใช้งานแค่ภายในหรือ localhost เนื่องจากรับโหลดได้มากกว่า server ฟรี)
- [Microtica](https://www.microtica.com/) สำหรับ Demo
- [AWS cloud formation](https://aws.amazon.com/th/cloudformation/)

### DEMO 🛒
[POSYAYEE](https://posyayee-demo.netlify.app/)
- Username: piyawat@posyayee
- Password: Piyawat172547;;
  
# อัพเดตครั้งที่ 1
- สร้างหน้าหลัก Route ของ Aside (Left nav bar)
- เชื่อม API สินค้าไม่มีบาร์โค้ดมาแสดงหน้าหลัก 

![สกรีนช็อต 2023-09-30 165341](https://github.com/boytur/POS-MERN-CLIENT-SIDE/assets/104257779/5e7eae68-6e28-4233-8e76-49205b78c613)

# อัพเดตครั้งที่ 2
- ทำหน้าสต็อก 
- เพิ่มปุ่มค้นหา
- เชื่อม API สินค้าที่ใกล้จะหมด พร้อมทำ UI 
- เชื่อม API สินค้าที่ทั้งหมด พร้อมทำ UI 
- เพิ่มปุ่มลบและแก้ไขที่ยังกดไม่ได้ 
- ทำหน้าโหลดดิ้ง
- แก้ไขปุ่มตรง aside ที่ต้องดับเบิ้ลคลิ๊กถึงจะ active
  
![image-3](https://github.com/boytur/POS-YAYEE-CLIENT/assets/104257779/587a7afd-84f0-4c68-ba77-a906d965c478)
![image-2](https://github.com/boytur/POS-YAYEE-CLIENT/assets/104257779/9d1c002b-5b08-4e61-9265-2383dfda35d9)
![image-1](https://github.com/boytur/POS-YAYEE-CLIENT/assets/104257779/54d15bb5-66f3-4db9-89e5-e25066a613dc)


# อัพเดตครั้งที่ 3
- ทำหน้า scan
- ทำฟังก์ชันลบข้อมูลจาก scan
- เพิ่มปุ่มแจ้งเตือนเวลาลบข้อมูลด้วย toatify
- เพิ่มปุ่มยกเลิกการขาย (ยังไม่ได้สร้าง pop-up confiirm)

  
![image](https://github.com/boytur/POS-MERN-CLIENT-SIDE/assets/104257779/caa5b99d-8d2a-4a01-b281-8c93c1c9cf2a)
![image](https://github.com/boytur/POS-MERN-CLIENT-SIDE/assets/104257779/c47e9ebe-dc96-4026-b77b-97113e7ddd0f)
![image](https://github.com/boytur/POS-MERN-CLIENT-SIDE/assets/104257779/6797ed15-7030-4e5b-be0a-3b391972b007)

# อัพเดตครั้งที่ 4
- เพิ่ม Popup confirm
  
![image](https://github.com/boytur/POS-MERN-CLIENT-SIDE/assets/104257779/d0aa4f5c-3519-4314-857d-02b3668355e4)
![image](https://github.com/boytur/POS-MERN-CLIENT-SIDE/assets/104257779/52662abb-b704-4d5c-ada6-f7005081ff8d)
![image](https://github.com/boytur/POS-MERN-CLIENT-SIDE/assets/104257779/0e8f4345-2e3b-4af3-bdaf-5f595a1a005a)
![image](https://github.com/boytur/POS-MERN-CLIENT-SIDE/assets/104257779/1935606b-ac49-42a9-bd7c-2b1afb0d94b5)
![image](https://github.com/boytur/POS-MERN-CLIENT-SIDE/assets/104257779/ae1340ac-7188-4549-959e-6c189022d673)
![image](https://github.com/boytur/POS-MERN-CLIENT-SIDE/assets/104257779/81c07f21-9500-4f99-ad0f-38e02c2856f7)

# อัพเดตครั้งที่ 5
- เพิ่ม Modal การแก้ไขข้อมูลของ AllProduct , OutStockProduct
- เพิ่ม Modal คอนเฟิร์มการลบข้อมูลของ AllProduct , OutStockProduct

![image](https://github.com/boytur/POS-MERN-CLIENT-SIDE/assets/104257779/d64f57f9-2f96-4c37-98d0-c1cbe3639272)
![image](https://github.com/boytur/POS-MERN-CLIENT-SIDE/assets/104257779/32f422eb-5b3d-4cdb-9602-17c7f49029c4)

# อัพเดตครั้งที่ 6
 - ทำพรีวิวรูปตรง edit products
 - ทำหน้า Login
 - เปลี่ยน design หน้า sale

![image](https://github.com/boytur/POS-MERN-CLIENT-SIDE/assets/104257779/7dadf622-8c64-47b7-ac4f-ee89e8f03263)
![image](https://github.com/boytur/POS-MERN-CLIENT-SIDE/assets/104257779/9baaa2fa-7979-4892-bee4-d83d8ecf6bd0)
![image](https://github.com/boytur/POS-MERN-CLIENT-SIDE/assets/104257779/7355794c-7436-4f9d-b4f1-4d0129a24617)

# อัพเดตครั้งที่ 7
- ทำเสิร์ชสินค้าและเพิ่มสินค้าเข้าตะกร้า

![image](https://github.com/boytur/POS-YAYEE-CLIENT/assets/104257779/2c8ca424-8bf3-4f22-b219-304af7487b59)

# อัพเดตครั้งที่ 8
- เชื่อม API delete
- ทำป๊อบอัพเมื่อลบสินค้าเสร็จ
- ทำแค่ใน All products ส่วน OutStcok ยังไม่ทำ

![image](https://github.com/boytur/POS-YAYEE-CLIENT/assets/104257779/5444a636-3891-4842-abc0-bf683458c56a)
![image](https://github.com/boytur/POS-YAYEE-CLIENT/assets/104257779/c3a41dba-77ea-4af5-ae5d-ec23718e4e3a)

# อัพเดตครั้งที่ 9
- ทำหน้าเพิ่มสินค้า
- เพิ่มฟอร์มสำหรับเพิ่มสินค้าใหม่
- แก้ไขดีไซน์ EditProduct.jsx

![image](https://github.com/boytur/POS-YAYEE-CLIENT/assets/104257779/cc3eba02-0180-4a89-8768-1a4c09856ded)
![image](https://github.com/boytur/POS-YAYEE-CLIENT/assets/104257779/1f9dd1f9-9a54-4a4d-9895-a448250eff87)

# อัพเดตครั้งที่ 10
- เชื่อม API login
- เก็บ token ใน session storage และ username
- เอาชื่อไปแสดงมุมขวาบน

![image](https://github.com/boytur/POS-YAYEE-CLIENT/assets/104257779/9215dabb-ab69-45e9-89ba-522bf774de08)
![image](https://github.com/boytur/POS-YAYEE-CLIENT/assets/104257779/ae79991d-e4fe-4c63-bba9-17979e335784)
![image](https://github.com/boytur/POS-YAYEE-CLIENT/assets/104257779/2fd9564c-6f74-4969-8f1c-a02df3baddb7)
![image](https://github.com/boytur/POS-YAYEE-CLIENT/assets/104257779/34acaa89-046a-4f2f-b32b-a64a471330c9)

# อัพเดตครั้งที่ 11
- เปลี่ยนให้มี Navbar ส่วนของช่องค้าหาแค่ใน Sale.jsx
- ลบ Navbar.jsx
- เอาชื่อ user มาไว้ข้างล่างซ้าย

![image](https://github.com/boytur/POS-YAYEE-CLIENT/assets/104257779/42a8887d-41a7-4b6c-a208-ece372a1c031)
![image](https://github.com/boytur/POS-YAYEE-CLIENT/assets/104257779/751db64b-f928-4411-a165-a9287159c062)
![image](https://github.com/boytur/POS-YAYEE-CLIENT/assets/104257779/bd11f931-d09f-4bb8-bae0-00ed8006f095)
![image](https://github.com/boytur/POS-YAYEE-CLIENT/assets/104257779/98bc6020-ad21-484e-bb11-0cc7e8a7f9de)

# อัพเดตครั้งที่ 12 (ฟังก์ชันหลักทำงานได้ครบ requirements แล้ว)
- เชื่อมต่อเครื่องแสกน ubs ให้สามารถอ่านบาร์โค้ดเพื่อทำการขายของได้
- เชื่อม API Sale เข้ากับหน้าการขาย
- ทำหน้าเพิ่มจำนวนสินค้าเติมทั้งเพิ่มแบบบาร์โค้ดและเพิ่มแบบค้นหาด้วยชื่อแล้วเพิ่มพร้อมเชือม API

![image](https://github.com/boytur/POSYAYEE-CLIENT/assets/104257779/8131a434-c787-4254-baba-d44f9e0ecfe0)
![image](https://github.com/boytur/POSYAYEE-CLIENT/assets/104257779/e0091c78-07bd-45f5-aef5-98db56f7680b)
![image](https://github.com/boytur/POSYAYEE-CLIENT/assets/104257779/633fe700-d12e-48a9-8a65-0b26729d9f12)
![image](https://github.com/boytur/POSYAYEE-CLIENT/assets/104257779/39ec22f5-b3b1-46f7-9a06-5750c0682cf1)



