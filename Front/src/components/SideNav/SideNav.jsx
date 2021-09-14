import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom'
import './SideNav.css';
import moment from 'moment';
export default function SideNav() {

    let m = moment().format("dddd, MMMM , Do YYYY, h:mm:ss a");

  

    const getToggle = () => {
        const showMenu = (headerToggle, navbarId) => {
            const toggleBtn = document.getElementById(headerToggle),
                nav = document.getElementById(navbarId)
            if (headerToggle && navbarId) {
                toggleBtn.addEventListener('click', () => {
                    nav.classList.toggle('show-menu')
                    toggleBtn.classList.toggle('bx-x')
                })
            }
        }
        showMenu('header-toggle', 'navbar')
        const linkColor = document.querySelectorAll('.nav__link')
        function colorLink() {
            linkColor.forEach(l => l.classList.remove('active'))
            this.classList.add('active')
        }
        linkColor.forEach(l => l.addEventListener('click', colorLink))
    }

    useEffect(() => {
        getToggle();
    }, []);

    return (
        <>
            <header class="header">
                <div class="header__container">

                <a href="#" class="header__logo">Samah Clinic</a>
                    <div className="moment">
                    {m}
                    </div>
                    
                    {/* <img src={profile} alt="" class="header__img" /> */}


                    <div class="header__search">

                    </div>

                    <div class="header__toggle">
                        <i class='bx bx-menu' id="header-toggle"></i>
                    </div>
                </div>
            </header>


            <div class="nav nav__main" id="navbar">
                <nav class="nav__container">
                    <div>
                        <a href="#" class="nav__link nav__logo">
                            <i class='bx bxs-disc nav__icon' ></i>
                            <span class="nav__logo-name">Samah Clinic</span>
                        </a>

                        <div class="nav__list">
                            <div class="nav__items">
                                {/* <h3 class="nav__subtitle">Profile</h3> */}

                                <a href="/home" class="nav__link active">
                                    <i class='bx bx-home nav__icon' ></i>
                                    <span class="nav__name">Home</span>
                                </a>

                                <div class="nav__dropdown">
                                    <Link to="/Appointment" class="nav__link">
                                        <i class='bx bx-calendar nav__icon' ></i>
                                        <span class="nav__name">Appointments</span>
                                    </Link>

                                 

                                </div>
                                <div class="nav__dropdown">
                                <Link to="/Payment" class="nav__link">
                                        <i class='bx bx-book-reader nav__icon'></i>

                                        <span class="nav__name">Payments</span>
                                    </Link>
                                </div>

                                <div class="nav__dropdown">

                                <Link to="/Client" class="nav__link">
                                        <i class='bx bx-user nav__icon' ></i>
                                        <span class="nav__name">Clients</span>
                                    </Link>
                                </div>
                                <div class="nav__dropdown">
                                <Link to="/ExpensePaymentList" class="nav__link">
                                        <i class='bx bx-book-reader nav__icon'></i>

                                        <span class="nav__name">Expenses Payment</span>
                                    </Link>
                                </div>

                                <div class="nav__dropdown">
                                <Link to="/Category" class="nav__link">
                                        <i class='bx bx-book-reader nav__icon'></i>

                                        <span class="nav__name">Category</span>
                                    </Link>
                                </div>



                                <div class="nav__dropdown">
                                <Link to="/Service" class="nav__link">
                                        <i class='bx bx-file nav__icon' ></i>
                                        <span class="nav__name">Services</span>
                                    </Link>


                                </div>

                                <div class="nav__dropdown">
                                <Link to="/ExpenseList" class="nav__link">
                                        <i class='bx bx-comment-edit nav__icon' ></i>
                                        <span class="nav__name">Expenses</span>
                                    </Link>


                                </div>

                                <div class="nav__dropdown">
                                <Link to="/" class="nav__link ">
                                        <i class='bx bx-log-out bx-tada nav__icon'></i>
                                        <span class="nav__name">Log Out</span>
                                    </Link>

                                </div>

                            </div>


                        </div>

                    </div>



                </nav>
            </div>



        </>
    );
}