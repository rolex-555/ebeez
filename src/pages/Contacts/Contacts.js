import React, { useState } from 'react';
import {
  TableContainer,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  TableFooter,
  Pagination,
  Button,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Select,
} from '@windmill/react-ui';
import { FaPencil } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";

export default function Contacts() {
  return (
    <div>
      <div className="flex flex-row justify-between items-center">
        <div>
          <div className="w-full font-semibold text-xl pb-4 pt-4">
            Contact List
          </div>
          <div className="pb-4 font-medium">Dashboard / Contacts</div>
        </div>
        <Button layout="link" className="bg-blue-500 h-10 hover:bg-blue-600">
          <span className="text-white">+ Add new contact</span>
        </Button>
      </div>
      <TableContainer>
        <Table>
          <TableHeader>
            <TableRow>
              <TableCell>User Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Password</TableCell>
              <TableCell>Company Name</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <div className="flex items-center text-sm">
                  {/* <Avatar src="/img/avatar-1.jpg" alt="Judith" /> */}
                  <span className="font-semibold ml-2">Prince Patel</span>
                </div>
              </TableCell>
              <TableCell>
                <span className="text-sm">prince1@gmail.com</span>
              </TableCell>
              <TableCell className="flex flex-row item-center gap-2"> 
                  <div>**********</div>
                  <div className='flex w-6 items-center p-1 bg-blue-200 rounded-lg'>

              <FaEye className='text-blue-600'/>
                  </div>
              </TableCell>
              <TableCell>
              <Button layout="outline" className="border border-blue-400">
          <span className="text-blue-400">View company list</span>
        </Button>
              </TableCell>
              <TableCell><span className="text-sm">New delhi, west bengal, ahemdabad</span></TableCell>

              <TableCell>
              <div className='flex w-6 h-6 justify-center items-center p-1 bg-blue-200 rounded-lg'>

              <FaPencil className='text-blue-600 text-xs'/>
                  </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <TableFooter>
          <Pagination
            totalResults={10}
            resultsPerPage={4}
            onChange={() => {}}
            label="Table navigation"
          />
        </TableFooter>
      </TableContainer>
    </div>
  );
}
