import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import gambarSukses from '../.../../../../asset/img/avatar/sukses.png'

export default class Sukses extends Component {
  render() {
    return (
      <div className='mt-5 text-center'>
        <img src={gambarSukses} alt="Sukses" width={500}/>
        <h3>Sukses Pesan</h3>
        <p className='mb-3'>Terima Kasih Sudah Memesan</p>
        <Button variant="primary" as={Link} Link to="/">Kembali</Button>
      </div>
    )
  }
}
