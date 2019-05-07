import React, { Component } from 'react'

export class Menu extends Component {
  render() {
    return (
 <div>
  <aside className="main-sidebar">
    {/* sidebar: style can be found in sidebar.less */}
    <section className="sidebar">
      {/* Sidebar user panel */}
      <div className="user-panel">
        <div className="pull-left image">
          <img src="dist/img/avatar04.png" className="img-circle" alt="User" />
        </div>
        <div className="pull-left info">
          <p>Bhremsak Tapewongsa</p>
          <a href="fake_url"><i className="fa fa-circle text-success" /> Online</a>
        </div>
      </div>
      {/* search form */}
      <form action="#" method="get" className="sidebar-form">
        <div className="input-group">
          <input type="text" name="q" className="form-control" placeholder="Search..." />
          <span className="input-group-btn">
            <button type="submit" name="search" id="search-btn" className="btn btn-flat">
              <i className="fa fa-search" />
            </button>
          </span>
        </div>
      </form>
      {/* /.search form */}
      {/* sidebar menu: : style can be found in sidebar.less */}
      <ul className="sidebar-menu" data-widget="tree">
        <li className="header">MAIN NAVIGATION</li>
     
        <li className="treeview">
          <a href="fake_url">
            <i className="fa fa-folder" /> <span>Examples API</span>
            <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right" />
            </span>
          </a>
          <ul className="treeview-menu">
            <li><a href="fake_url"><i className="fa fa-circle-o" /> Invoice</a></li>
            {/*<li><a href="pages/examples/profile.html"><i className="fa fa-circle-o" /> Profile</a></li>
            <li><a href="pages/examples/login.html"><i className="fa fa-circle-o" /> Login</a></li>
            <li><a href="pages/examples/register.html"><i className="fa fa-circle-o" /> Register</a></li>
            <li><a href="pages/examples/lockscreen.html"><i className="fa fa-circle-o" /> Lockscreen</a></li>
            <li><a href="pages/examples/404.html"><i className="fa fa-circle-o" /> 404 Error</a></li>
            <li><a href="pages/examples/500.html"><i className="fa fa-circle-o" /> 500 Error</a></li>
            <li><a href="pages/examples/blank.html"><i className="fa fa-circle-o" /> Blank Page</a></li>
    <li><a href="pages/examples/pace.html"><i className="fa fa-circle-o" /> Pace Page</a></li> */}
          </ul>
        </li>
    {/**    <li className="treeview">
          <a href="fake_url">
            <i className="fa fa-share" /> <span>Multilevel</span>
            <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right" />
            </span>
          </a>
          <ul className="treeview-menu">
            <li><a href="fake_url"><i className="fa fa-circle-o" /> Level One</a></li>
            <li className="treeview">
              <a href="fake_url"><i className="fa fa-circle-o" /> Level One
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right" />
                </span>
              </a>
              <ul className="treeview-menu">
                <li><a href="fake_url"><i className="fa fa-circle-o" /> Level Two</a></li>
                <li className="treeview">
                  <a href="fake_url"><i className="fa fa-circle-o" /> Level Two
                    <span className="pull-right-container">
                      <i className="fa fa-angle-left pull-right" />
                    </span>
                  </a>
                  <ul className="treeview-menu">
                    <li><a href="fake_url"><i className="fa fa-circle-o" /> Level Three</a></li>
                    <li><a href="fake_url"><i className="fa fa-circle-o" /> Level Three</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><a href="fake_url"><i className="fa fa-circle-o" /> Level One</a></li>
          </ul>
  </li> */}
      </ul>
    </section>
    {/* /.sidebar */}
  </aside>
</div>

    )
  }
}

