import React from "react";
//Bootstrap
import { Col, Card } from "react-bootstrap";
//format js
import { numberWithCommas } from "../../utills/format";



const MenuProduct = ({ menus, masukKeranjang }) => {
  return (
    <Col md={4} xs={12}>
      <Card className="mb-4 mt-5 shadow" onClick={() => masukKeranjang(menus)}>
        <Card.Img variant="top" src={"images/" + menus.category.nama.toLowerCase() + "/" + menus.gambar}/>
        <Card.Body>
          <Card.Title>{menus.nama}</Card.Title>
          <Card.Text>
            Rp {numberWithCommas(menus.harga)}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default MenuProduct;
