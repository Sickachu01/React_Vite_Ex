import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import CHerb1 from "./assets/images/h-01.png";
import CHerb2 from "./assets/images/h-02.jpg";
import CHerb3 from "./assets/images/h-03.jpg";
import slide1 from "./assets/images/CaHerb1.jpg";
import slide2 from "./assets/images/CaHerb2.jpg";
import slide3 from "./assets/images/CaHerb3.jpg";
import logo from "./assets/images/logo.png";
import logo2 from "./assets/images/ssru-logo-tran.png";

function App() {
  return (
    <Container>
      <Navbar expand="lg" bg="success">
        <Navbar.Brand href="#home">
          <img src={logo2} height="80" className="d-inline-block align-top" />
          <img src={logo} height="80" className="d-inline-block align-top" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#herp">สมุนไพร</Nav.Link>
            <Nav.Link href="#disease">รักษาตามโรค</Nav.Link>
            <Nav.Link href="#recipe">สูตรยาสมุนไพร</Nav.Link>
            <Nav.Link href="#shop">ร้านขายสมุนไพร</Nav.Link>
            <Nav.Link href="#myModal">ติดต่อเรา</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img src={slide1} alt="First slide" />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={slide2} alt="Second slide" />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>{" "}
        <Carousel.Item>
          <img src={slide3} alt="Third slide" />{" "}
          <Carousel.Caption>
            <h5>Third slide label</h5>{" "}
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.{" "}
            </p>{" "}
          </Carousel.Caption>{" "}
        </Carousel.Item>{" "}
      </Carousel>
      <Row>
        <Col lg={4}>
          <Card style={{ margin: "10px" }}>
            <Card.Img variant="top" src={CHerb1} />
            <Card.Body>
              {" "}
              <Card.Title>ลูกใต้ใบ</Card.Title>
              <Card.Text>
                ใช้แก้ไข้ เป็นสรรพคุณแรก ๆ ของลูกใต้ใบที่คนรู้จักกันมากที่สุดว่า
                สามารถแก้ไข้ได้ผลดีเยี่ยม ลูกใต้ใบ จึงมักเป็นสมุนไพรที่พระธุดงค์
                มักพกติดตัวในยามออกธุดงค์ เพื่อแก้ไข้หวัด ไข้หวัดใหญ่
                ที่อาจเกิดขึ้นได้จากอากาศที่เปลี่ยนแปลง นอกจากนี้ ลูกใต้ใบ
                ยังสามารถแก้ไข้จากการอ่อนเพลีย ไข้จับสั่น ได้อีก
                โดยวิธีการใช้จะนำลูกใต้ใบไปตากแห้งเก็บใส่โหลไว้
                เพื่อชงเป็นชาดื่มเวลาเกิดอาการ
              </Card.Text>
              <Button variant="success">Click</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4}>
          <Card style={{ margin: "10px" }}>
            <Card.Img variant="top" src={CHerb2} />
            <Card.Body>
              <Card.Title>พลูคาว</Card.Title>
              <Card.Text>
                พลูคาวเป็นพืชที่มีอายุยืนและเป็นพืชสมุนไพรประจำถิ่นที่พบมากในแถบภาคเหนือของไทย
                และยังพบในบริเวณเทือกเขาหิมาลัย อินเดีย(india)
                เรื่อยมาจนถึงจีน(china) ลาว(laos) เกาหลี(korae)
                เวียดนาม(vietnam) และญี่ปุ่น(japan)
                ซึ่งถือเป็นพืชตระกูลเดียวกับพลู ชอบขึ้นในพื้นที่ชื้นแฉะ
                มีร่มเงาเล็กน้อยและสภาพอากาศเย็น โดยจะมีลักษณะแตกต่างจากพลู คือ
                ที่ใต้ใบของพลูคาวจะมีสีแดงอ่อนไปจนถึงสีแดงเข้ม
              </Card.Text>
              <Button variant="success">Click</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4}>
          <Card style={{ width: "25rem", margin: "10px" }}>
            <Card.Img variant="top" src={CHerb3} />
            <Card.Body>
              <Card.Title>ชะพลู</Card.Title>
              <Card.Text>
                “ชะพลู” เป็นพืชพื้นบ้านที่แพร่หลาย พบในทุกจังหวัดของประเทศไทย
                เป็นพืชล้มลุกที่มีอายุสืบต่อได้หลายปี ชอบพื้นที่ลุ่มต่ำ ชื้นแฉะ
                ที่ที่มีน้ำดี ดินดี จะเจริญเติบโตได้ดีมาก ใบจะโต ยอดจะอวบอ้วน
                เป็นพรรณไม้ที่มีต้นตั้ง บางครั้งจะพบต้นแบบเถาเลื้อย
                ระบบรากหากินผิวดิน ถ้าเถาเลื้อยไปพบที่เหมาะ ก็จะออกรากตามข้อ
                และแตกต้นขึ้นใหม่ แพร่ขยายต้นไปเรื่อยๆ เมื่อต้องการจะย้ายที่ปลูก
                ก็สามารถถอนดึงต้นติดรากไปปลูกได้เลย
              </Card.Text>
              <Button variant="success">Click</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
