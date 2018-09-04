import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="container mt-10">
        <h1>Quản Lý Công Việc</h1>

      <div className="row mt-10">

        <div className="col-sm-4">
            <form className = "">
              <legend>Thêm công việc</legend>
            
              <div className="form-group">
                <label >Tên:</label>
                <input type="text" className="form-control" />
              </div>

              <div className="form-group">
                <label >Trạng thái:</label>
                <select className = "form-control">
                  <option value = {0} > Ẩn </option>
                  <option value = {1}> Kích hoạt </option>     
                </select>
              </div>
                             
                  <button type="submit" className="btn btn-success">
                    <span className="glyphicon glyphicon-plus"></span> Lưu lại
                  </button>

                  <button type="reset" className="btn btn-danger ml-10">
                    <span className="glyphicon glyphicon-remove"></span> Hủy bỏ
                  </button>
            </form>
        </div>

        <div className="col-sm-8 ">
            <button type="submit" className="btn btn-primary ">
                <span className="glyphicon glyphicon-plus"></span> Thêm công việc
            </button>

            <form className="button-search" role="search">
              <div className="input-group mt-10">
                <input type="text" className="form-control" placeholder="Nhập từ khóa..."/>
                <div className="input-group-btn">
                    <button className="btn btn-primary" type="submit"><i className="glyphicon glyphicon-search"></i>

                    </button>
                </div>
              </div>
           </form>

           <table class="table table-bordered">
             <thead>
               <tr>
                 <th>STT</th>
                 <th>Tên</th>
                 <th>Trạng thái</th>
                 <th>Hành động</th>
               </tr>
             </thead>
             <tbody>
               <tr>
                 <td></td>
                 <td>
                   <input type="tel" name="" id="input" class="form-control" value="" required="required" title="" />
                 </td>
                 <td>
                  <div className="form-group">
                    <select className = "form-control">
                      <option value = {0} > Ẩn </option>
                      <option value = {1}> Kích hoạt </option>     
                    </select>
                  </div>
                 </td>
                 <td></td>
               </tr>

              <tr>
                 <td>1</td>
                 <td>
                   Học Angular 4
                 </td>
                 <td>
                    Kích Hoạt
                 </td>
                 <td>

                 <div>

                  <button type="submit" className="btn btn-warning">
                    <span className="glyphicon glyphicon-edit"></span> Sửa
                  </button>

                  <button type="reset" className="btn btn-danger ml-10">
                    <span className="glyphicon glyphicon-remove"></span> Xóa
                  </button>

                 </div>
                   
                 </td>
               </tr>

             </tbody>
           </table>

        </div>

      </div>


        </div>
    );
  }
}

export default App;
