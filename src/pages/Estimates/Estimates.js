import React from 'react';
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
import { useHistory } from 'react-router-dom';

function Estimates() {
    const history = useHistory();
  return (
    <div>
      <div className="w-full flex justify-end mb-8">
        <Button layout="link" className="bg-blue-500 h-10 hover:bg-blue-600" onClick={()=>history.push('/app/manage-companies/estimate/new')}>
          <span className="text-white">New Estimate</span>
        </Button>
      </div>
      <TableContainer>
        <Table>
          <TableHeader>
            <TableRow>
              <TableCell>EST ID</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Issue Date</TableCell>
              <TableCell>Due Date</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <div className="flex items-center text-sm">
                  {/* <Avatar src="/img/avatar-1.jpg" alt="Judith" /> */}
                  <span className="font-semibold ml-2">#5432345432</span>
                </div>
              </TableCell>
              <TableCell>
                <span className="text-sm">Active</span>
              </TableCell>
              <TableCell className="flex flex-row item-center gap-2"> 
                  <div className="text-sm">
                      30/10/2023
                  </div>
              </TableCell>
              <TableCell>
              <div className="text-sm">
                      31/12/2023
                  </div>
              </TableCell>
              <TableCell><span className="text-sm">10,000</span></TableCell>

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

export default Estimates;
