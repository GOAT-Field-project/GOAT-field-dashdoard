import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
    Chip,
    Tooltip,
    Progress,
    Button,
    IconButton
  } from "@material-tailwind/react";
  import {  bookingData } from "@/data";
  export function Booking() {
    return (
      <div className="mt-12 mb-8 flex flex-col gap-12 " >
        <Card>
          <CardHeader variant="gradient" color="green" className="mb-8 p-6">
          <div className="grid grid-cols-6 gap-x-8 justify-end">
            <Typography variant="h6" color="white">
              Booking Table
            </Typography>
            
            <Typography
                          as="a"
                          href='booking/add'
                          className="text-xs font-semibold text-blue-gray-600 justify-center"
                        >
  <Button color="blue-gray" size="sm">
    Add Booking
  </Button>
  </Typography>
            </div>
          </CardHeader>
          
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
            
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {["bookingID", " userName", "pitchName", "date","time","phone","Action"].map((el) => (
                    <th
                      key={el}
                      className="border-b border-blue-gray-50 py-3 px-5 text-left"
                    >
                      <Typography
                        variant="small"
                        className="text-[11px] font-bold uppercase text-blue-gray-400"
                      >
                        {el}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {bookingData.map(
                  ({ bookingID, userName, pitchName, date,time,phone}, key) => {
                    const className = `py-3 px-5 ${
                      key === bookingData.length - 1
                        ? ""
                        : "border-b border-blue-gray-50"
                    }`;
  
                    return (
                      <tr key={bookingID}>
                        <td className={className}>
                          <div className="flex items-center gap-4">                          
                            <div>
                            <Typography className="text-xs font-normal text-blue-gray-500">
                                {bookingID}
                              </Typography>
                            
                             
                            </div>
                          </div>
                        </td>
                         <td className={className}>
                          <Typography className="text-xs font-semibold text-blue-gray-600">
                            {userName}
                          </Typography>
                          
                        </td>
                        <td className={className}>
                          <Typography className="text-xs font-semibold text-blue-gray-600">
                            {pitchName}
                          </Typography>
                          
                        </td> 
                        <td className={className}>
                          <Typography className="text-xs font-semibold text-blue-gray-600">
                            {date}
                          </Typography>
                          
                        </td> 
                        <td className={className}>
                          <Typography className="text-xs font-semibold text-blue-gray-600">
                            {time}
                          </Typography>
                          
                        </td> 
                        <td className={className}>
                          <Typography className="text-xs font-semibold text-blue-gray-600">
                            {phone}
                          </Typography>
                          
                        </td> 
                      
                         
                        <td className={className}>
                          <div className="grid grid-cols-2 gap-2 justify-center">
                            <div className="justify-center">
                          <Typography
                            as="a"
                            href={'booking/edit/'+ bookingID}
                            className="text-xs font-semibold text-blue-gray-600 justify-center"
                          >                          
                           <IconButton ripple={true} color="green">
                           <i className="fa-regular fa-pen-to-square"></i>
                           </IconButton>
                          </Typography>
                          </div>
                          <div className="justify-center">
                          <Typography
                            as="a"
                            href={'booking/delete/'+ bookingID}
                            className="text-xs font-semibold text-blue-gray-600 justify-center"
                          >
  
                           <IconButton ripple={true} color="green">
                           <i className="fa-solid fa-trash" ></i>
                           </IconButton>
                          </Typography>
                          </div>
                           </div>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </div>
    );
  }
  
  export default Booking;