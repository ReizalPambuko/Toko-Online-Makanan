import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { numberWithCommas } from "../../utills/format";

export default class HasilBayar extends Component {
  render() {
    const hasilBayar = this.props.keranjangs.reduce(function (result, item) {
      return result + item.total_harga;
    }, 0);

    return (
      <div className="fixed-bottom">
        <Row>
          <Col md={{ span: 3, offset: 9 }} className="px-5 py-2">
            <h5>Total Harga <strong>Rp {numberWithCommas(hasilBayar)}</strong></h5>
          </Col>
        </Row>
      </div>
    );
  }
}
