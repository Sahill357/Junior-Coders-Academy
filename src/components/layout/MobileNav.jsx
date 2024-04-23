 
import React, { useState } from "react";
import { Link } from "react-router-dom";
const MobileNav = () => {

  
 // State to manage the open/closed state of the dropdown
 const [isDropdownOpen, setDropdownOpen] = useState(false);

 // Function to toggle the dropdown state
 const toggleDropdown = () => {
   setDropdownOpen(!isDropdownOpen);
 };

  return (
    <div className="vs-menu-wrapper">
      <div className="vs-menu-area">
        <button className="vs-menu-toggle">
          <i className="fal fa-times" />
        </button>
        <div className="mobile-logo">
          <Link to="/Hero">
            <div className="logoname">junior </div>{" "}
            <span className="logoname2">Coders</span>
          </Link>
        </div>
        <div className="vs-mobile-menu">
          <ul>
            <li>
              <Link to={"/Hero"}> Home</Link>
            </li>
          

               {/* Specialized */}

               <li className={`menu-item-has-children ${isDropdownOpen ? "open" : ""}`}>
               <a href="#" onClick={toggleDropdown}>
                Courses
              </a>
                        <ul className="sub-menu">
                           <li className="menu-item-has-children">
                           <Link to="/Regular"  exact="true" activeclassname="active">
                           Regular
                        </Link>
                            <ul className="sub-menu">
                              <li>
                              <Link to="/Beginner"  exact="true" activeclassname="active">
                          Beginner
                        </Link>
                              </li>
                              <li>
                              <Link to="/Intermediate"  exact="true" activeclassname="active">
                         Intermediate
                        </Link>
                              </li>
                              <li>
                              <Link to="/Advanced"  exact="true" activeclassname="active">
                         Advanced
                        </Link>
                              </li>
                             
                            
                            </ul>
                          </li>
                          
                          <li className="menu-item-has-children">
                          <Link to="/Weekend"  exact="true" activeclassname="active">
                          Weekend
                        </Link>
                            <ul className="sub-menu">
                              <li>
                              <Link to="/Beg"  exact="true" activeclassname="active">
                              Beginner
                        </Link>
                              </li>
                              <li>
                              <Link to="/Inter"  exact="true" activeclassname="active">
                             Intermediate
                        </Link>
                              </li>
                              <li>
                              <Link to="/AD"  exact="true" activeclassname="active">
                              Advanced
                        </Link>
                              </li>
                            </ul>
                          </li>


                          
                          <li className="menu-item-has-children">
                             <Link  to="/Cto"  exact="true" activeclassname="active">
                          Specialized
                        </Link>
                            

                            <ul className="sub-menu">
                            <li>

                            <Link to="/AiAlgoritm"  exact="true" activeclassname="active">
                          AI & Algorithm
                        </Link>
                              </li>
                              <li>
                              <Link to="/FunCoding"  exact="true" activeclassname="active">
                        Fun Coding & Algorithm   
                        </Link>
                              </li>
                              <li>
                              <Link to="/MobileApp"  exact="true" activeclassname="active">
                          Mobile App Development
                        </Link>
                              </li>
                              <li>
                              <Link to="/ComputerVision"  exact="true" activeclassname="active">
                          Computer Vision 
                        </Link>
                              </li>
                              <li>
                              <Link to="/Robotics"  exact="true" activeclassname="active">
                        Robotics
                        </Link>
                              </li>
                              <li>
                              <Link to="/WebDesigning"  exact="true" activeclassname="active">
                        Web Designing
                        </Link>
                              </li>
                              <li>
                              <Link to="/Hardware"  exact="true" activeclassname="active">
                          Hardware
                        </Link>
                              </li>
                              <li>
                              <Link to="/IOT"  exact="true" activeclassname="active">
                          IoT
                        </Link>
                              </li>
                            </ul>
                          </li>

                        </ul>
                      </li>
                {/* Specialized */}

                <li>
              <Link to={"/About"}> About</Link>
            </li>

                <li>
              <Link to={"/Contact"}> Contact</Link>
            </li>
          </ul>
        </div>
        {/* Menu Will Append With Javascript */}
      </div>
    </div>
  );
};

export default MobileNav;

  
 
 
   

       
// $.fn.vsmobilemenu = function (options) {
//   var opt = $.extend({
//     menuToggleBtn: '.vs-menu-toggle',
//     bodyToggleClass: 'vs-body-visible',
//     subMenuClass: 'vs-submenu',
//     subMenuParent: 'vs-item-has-children',
//     subMenuParentToggle: 'vs-active',
//     meanExpandClass: 'vs-mean-expand',
//     subMenuToggleClass: 'vs-open',
//     toggleSpeed: 100,
//   }, options);

//   return this.each(function () {
//     var menu = $(this); // Select menu

//     // Menu Show & Hide
//     function menuToggle() {
//       menu.toggleClass(opt.bodyToggleClass);

//       // collapse submenu on menu hide or show
//       var subMenu = '.' + opt.subMenuClass;
//       $(subMenu).each(function () {
//         if ($(this).hasClass(opt.subMenuToggleClass)) {
//           $(this).removeClass(opt.subMenuToggleClass);
//           $(this).css('display', 'none');
//           $(this).parent().removeClass(opt.subMenuParentToggle);
//         }
//       });
//     }

//     // Class Set Up for every submenu
//     menu.find('li').each(function () {
//       var submenu = $(this).find('ul');
//       submenu.addClass(opt.subMenuClass);
//       submenu.css('display', 'none');
//       submenu.parent().addClass(opt.subMenuParent);
//       submenu.prev('a').addClass(opt.meanExpandClass);
//       submenu.next('a').addClass(opt.meanExpandClass);
//     });

//     // Toggle Submenu
//     function toggleDropDown($element) {
//       if ($($element).next('ul').length > 0) {
//         $($element).parent().toggleClass(opt.subMenuParentToggle);
//         $($element).next('ul').slideToggle(opt.toggleSpeed);
//         $($element).next('ul').toggleClass(opt.subMenuToggleClass);
//       } else if ($($element).prev('ul').length > 0) {
//         $($element).parent().toggleClass(opt.subMenuParentToggle);
//         $($element).prev('ul').slideToggle(opt.toggleSpeed);
//         $($element).prev('ul').toggleClass(opt.subMenuToggleClass);
//       }
//     }

//     // Submenu toggle Button
//     var expandToggler = '.' + opt.meanExpandClass;
//     $(expandToggler).each(function () {
//       $(this).on('click', function (e) {
//         e.preventDefault();
//         toggleDropDown(this);
//       });
//     });

//     // Menu Show & Hide On Toggle Btn click
//     $(opt.menuToggleBtn).each(function () {
//       $(this).on('click', function () {
//         menuToggle();
//       });
//     });

//     // Hide Menu On outside click
//     menu.on('click', function (e) {
//       e.stopPropagation();
//       menuToggle();
//     });

//     // Stop Hide full menu on menu click
//     menu.find('div').on('click', function (e) {
//       e.stopPropagation();
//     });

//   });
// };

// $('.vs-menu-wrapper').vsmobilemenu();