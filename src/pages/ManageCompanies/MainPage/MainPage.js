import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import { getAllCompany } from '../../../store/actions/action';

function MainPage() {
  const dispatch = useDispatch();

    const history = useHistory();
    useEffect(() => {
      dispatch(getAllCompany());
    }, []);
  const companyData = useSelector((state) => state?.company.data?.data);
  console.log(">>> ALL COMPANY",companyData);

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
          {/* <TableBody>
            <TableRow>
              <TableCell>
                <div className="flex items-center text-sm">
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
          </TableBody> */}
            <TableBody>
            {companyData?.map((user, i) => (
              <TableRow key={i}>
                <TableCell>
                  <div className="flex items-center text-sm">
                    <div>
                      <p className="font-semibold">{user.name}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                <div className="flex items-center text-sm">
                    <div>
                      <p className="font-semibold">{user.stateName}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                 <div className='flex w-6 items-center p-1 bg-blue-200 rounded-lg cursor-pointer' onClick={()=>history.push('/app/manage-companies/view',{ user: user })}>
<FaEye className='text-blue-600'/>
    </div>
                </TableCell>
              </TableRow>
            ))}
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