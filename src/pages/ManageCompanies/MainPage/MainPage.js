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
import { FaEye } from "react-icons/fa";
import { useHistory } from 'react-router-dom';

function MainPage() {
    const history = useHistory();
  return (
    <div>
      <div className="w-full font-bold text-lg pb-4 pt-4">Ebview</div>
      <div className="pb-4 font-semibold">
        Dashboard / Manage Companies
      </div>
      <TableContainer>
        <Table>
          <TableHeader>
            <TableRow>
              <TableCell>Company Name</TableCell>
              <TableCell>Company Address</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <div className="flex items-center text-sm">
                  {/* <Avatar src="/img/avatar-1.jpg" alt="Judith" /> */}
                  <span className="font-semibold ml-2">Ebiew</span>
                </div>
              </TableCell>
              <TableCell>
                <span className="text-sm">K199, Palm City, 54455, Florida, United States</span>
              </TableCell>
              <TableCell>
              <div className='flex w-6 items-center p-1 bg-blue-200 rounded-lg cursor-pointer' onClick={()=>history.push('/app/manage-companies/view')}>
<FaEye className='text-blue-600'/>
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
  )
}

export default MainPage