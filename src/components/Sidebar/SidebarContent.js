import React from "react";
import routes from "../../routes/sidebar";
import { NavLink, Route } from "react-router-dom";
import * as Icons from "../../icons";
import SidebarSubmenu from "./SidebarSubmenu";
import { Button } from "@windmill/react-ui";
import {
  Avatar,
  Badge,
  Input,
  Dropdown,
  DropdownItem,
  WindmillContext,
} from "@windmill/react-ui";
import { SearchIcon } from "../../icons";
function Icon({ icon, ...props }) {
  const Icon = Icons[icon];
  return <Icon {...props} />;
}

function SidebarContent() {
  return (
    <div className="py-4 text-gray-500 dark:text-gray-400">
      <div className="flex">
        <div >
          {" "}
          <Avatar
            className="align-middle w-12 h-12 ml-2"
            src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
            alt=""
            aria-hidden="true"
          />
        </div>
        <div >
          <div className="ml-6 text-sm font-bold text-gray-800 dark:text-gray-200">
            Welcome
          </div>
          <div className="relative max-w-xl mr-4 mt-2 focus-within:text-purple-500">
          <div className="w-70 ml-6 ">
            <div className="absolute inset-y-0 flex items-center mt-2 ">
             Catherine
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className="relative max-w-xl mr-4 mt-4 focus-within:text-purple-500">
          <div className="w-70 ml-6 ">
            <div className="absolute inset-y-0 flex items-center pl-2 ">
              <SearchIcon className="w-4 h-4" aria-hidden="true" />
            </div>
            <Input
              className="pl-8  text-gray-700"
              placeholder="EbeeTech"
              aria-label="Search"
            />
          </div>
        </div>

      <div className="flex justify-center flex-1 lg:mx-4 mt-2 ">
        
      </div>
      <ul className="mt-6">
        {routes.map((route) =>
          route.routes ? (
            <SidebarSubmenu route={route} key={route.name} />
          ) : (
            <li className="relative px-6 py-3" key={route.name}>
              <NavLink
                exact
                to={route.path}
                className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                activeClassName="text-gray-800 dark:text-gray-100"
              >
                <Route path={route.path} exact={route.exact}>
                  <span
                    className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                    aria-hidden="true"
                  ></span>
                </Route>
                {/* <Icon className="w-5 h-5" aria-hidden="true" icon={route.icon} /> */}
                <span className="ml-4">{route.name}</span>
              </NavLink>
            </li>
          )
        )}
      </ul>
      <div className="px-6 my-6">
        {/* <Button>
          Create account
          <span className="ml-2" aria-hidden="true">
            +
          </span>
        </Button> */}
      </div>
    </div>
  );
}

export default SidebarContent;
