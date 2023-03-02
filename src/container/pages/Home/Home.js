    import React, { Component } from "react";
    
    //Bootstrap
    import { Row, Col, Container } from "react-bootstrap";
    //List Menu //Total
    import { ListMenu, Total, MenuProduct } from "../../../utills";
    //Axios
    import axios from "axios";
    //URL API
    import { URL_API } from "../../../utills/constant";
    //Alert
    import swal from "sweetalert";

    export default class Home extends Component {
    constructor(props) {
    super(props);

    this.state = {
        menu: [],
        makananUser: "Makanan",
        keranjangs: [],
    };
    }



    componentDidMount() {
        axios
        .get(URL_API + "products?category.nama=" + this.state.makananUser)
        .then((res) => {
        const menu = res.data;
        this.setState({
            menu,
        });
        })
        .catch((error) => {
        console.log("Error ya", error);
        });



        axios
        .get(URL_API + "keranjangs")
        .then((res) => {
        const keranjangs = res.data;
        this.setState({
            keranjangs
        });
        })
        .catch((error) => {
        console.log("Error ya", error);
        });


    }

    componentDidUpdate(){
    axios
        .get(URL_API + "keranjangs")
        .then((res) => {
        const keranjangs = res.data;
        this.setState({
            keranjangs
        });
        })
        .catch((error) => {
        console.log("Error ya", error);
        });
    }


    changeCounter = (value) => {
    this.setState({
        makananUser: value,
        manu: [],
    });

    axios
        .get(URL_API + "products?category.nama=" + value)
        .then((res) => {
        const menu = res.data;
        this.setState({
            menu,
        });
        })

        .catch((error) => {
        console.log("Error ya", error);
        });
    };

    masukKeranjang = (value) => {
    axios
        .get(URL_API + "keranjangs?product.id=" + value.id)
        .then((res) => {
        if (res.data.length === 0) {
            const keranjang = {
            jumlah: 1,
            total_harga: value.harga,
            product: value,
            };

            axios.post(URL_API + "keranjangs ", keranjang).then((res) => {
            swal({
                title: "Sukses!",
                text: "Sukses Masuk Keranjang " + keranjang.product.nama,
                icon: "success",
                buttons: false,
                timer: "2000",
            });
            });
        } else {
            const keranjang = {
            jumlah: res.data[0].jumlah + 1,
            total_harga: res.data[0].total_harga + value.harga,
            product: value,
            };

            axios
            .put(URL_API + "keranjangs/" + res.data[0].id, keranjang)
            .then((res) => {
                swal({
                title: "Sukses!",
                text: "Sukses Masuk Keranjang " + keranjang.product.nama,
                icon: "success",
                buttons: false,
                timer: "2000",
                });
            })

            .catch((error) => {
                console.log("Error ya", error);
            });
        }
        })
        .catch((error) => {
        console.log("Error ya", error);
        });
    };

    render() {
    const { menu, makananUser, keranjangs } = this.state;
    return (
        <div className="mt-4">
        <Container fluid>
            <Row>
            <ListMenu
                changeCounter={this.changeCounter}
                makananUser={makananUser}
            />
            <Col>
                <h5>
                <strong>Menu Makanan</strong>
                </h5>
                <Row>
                {menu.map((menus) => {
                    return (
                    <MenuProduct
                        key={menus.id}
                        menus={menus}
                        masukKeranjang={this.masukKeranjang}
                    />
                    );
                })}
                </Row>
            </Col>
            <Total keranjangs={keranjangs}/>
            </Row>
        </Container>
        </div>
    );
    }
    }
