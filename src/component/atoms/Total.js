import React, { Component } from "react";
//Bootstrap
import { Col, ListGroup, Row, Badge } from "react-bootstrap";
import { numberWithCommas } from "../../utills/format";
import HasilBayar from "./HasilBayar";

export default class Total extends Component {
    render() {
    const { keranjangs } = this.props;
    return (
    <Col md={3}>
        <h5>
        <strong>Total</strong>
        </h5>


            {
                keranjangs.length !== 0 &&(
                        <ListGroup variant="flush" className="mt-5">
                        {keranjangs.map((menuKeranjang) => {
                            return <ListGroup.Item className="p-3">
                                <Row>
                                    <Col xs={3}>
                                    <Badge pill bg="success">
                                        {menuKeranjang.jumlah}
                                    </Badge>
                                    </Col>
                                    <Col>
                                        <p>{menuKeranjang.product.nama}</p>
                                        <strong>Rp {numberWithCommas(menuKeranjang.product.harga)}</strong>
                                    </Col>
                                    <Col>
                                    <strong className="float-end">
                                        Rp {numberWithCommas(menuKeranjang.total_harga)}
                                    </strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>;
                        })}
                        </ListGroup>
                )
            }
            <HasilBayar keranjangs={keranjangs} />
    </Col>
    );
}
}
