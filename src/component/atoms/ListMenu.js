import React, { Component } from "react";
//Bootstrap
import { Col, ListGroup } from "react-bootstrap";
//Pemanggilan API
import { URL_API } from "../../utills/constant";
//Axios
import axios from "axios";
//Font
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faMugHot,
  faCookie,
} from "@fortawesome/free-solid-svg-icons";




const Icon = ({ nama }) => {
  if (nama === "Makanan")
    return <FontAwesomeIcon className="me-2" icon={faUtensils} />;
  if (nama === "Minuman")
    return <FontAwesomeIcon className="me-2" icon={faMugHot} />;
  if (nama === "Cemilan")
    return <FontAwesomeIcon className="me-2" icon={faCookie} />;

  return <FontAwesomeIcon icon={faUtensils} />;
};

export default class ListMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listMenus: [],
    };
  }

  componentDidMount() {
    axios.get(URL_API + "categories").then((res) => {
      const listMenus = res.data;
      this.setState({
        listMenus,
      });
    });
  }

  render() {
    const { listMenus } = this.state;
    const { changeCounter, makananUser } = this.props;

    return (
      <Col md={2}>
        <h5>
          <strong>Daftar Menu</strong>
        </h5>

        <ListGroup className="mt-5">
            {
                listMenus && listMenus.map((menu) => {
                   return <ListGroup.Item className={makananUser === menu.nama && "active"} onClick={() => changeCounter(menu.nama)}
                   style={{cursor: "pointer", marginBottom: "20px", padding: "15px", borderRadius: "5px", boxShadow: "0 5px 5px rgba(0,0,0,.2 )"}}
                   >
                    <Icon nama={menu.nama} /> {menu.nama}
                    
                   </ListGroup.Item>
                })
            }
        </ListGroup>
      </Col>
    );
  }
}
