import React from "react";
import styled from "styled-components";


const WidgetLg = () => {
    return (
        <WidgetLgContainer>
            <Title>Latest transactions</Title>
            <Table>
                <TableTr>
                    <TableTh>Customer</TableTh>
                    <TableTh>Date</TableTh>
                    <TableTh>Amount</TableTh>
                    <TableTh>Status</TableTh>
                </TableTr>
                <TableTr>
                    <TableTdUser> {/* missing */}
                        <img src="https://s2.q4cdn.com/470004039/files/images/executive_profiles/tim_cook.png" />
                        <Username>Susan Carol</Username>{/* missing */}
                    </TableTdUser>
                    <TableTdDate>2 Jun 2021</TableTdDate> {/* missing */}
                    <TableTdAmount>$122.00</TableTdAmount>{/* missing */}
                    <TableTdStatus><Button type='Approved'>Approved</Button></TableTdStatus> {/* missing */}{/* missing */}
                </TableTr>
                <TableTr>
                    <TableTdUser> {/* missing */}
                        <img src="https://s2.q4cdn.com/470004039/files/images/executive_profiles/tim_cook.png" />
                        <Username>Susan Carol</Username>{/* missing */}
                    </TableTdUser>
                    <TableTdDate>2 Jun 2021</TableTdDate> {/* missing */}
                    <TableTdAmount>$122.00</TableTdAmount>{/* missing */}
                    <TableTdStatus><Button type='Declined'>Declined</Button></TableTdStatus> {/* missing */}{/* missing */}
                </TableTr>
                <TableTr>
                    <TableTdUser> {/* missing */}
                        <img src="https://s2.q4cdn.com/470004039/files/images/executive_profiles/tim_cook.png" />
                        <Username>Susan Carol</Username>{/* missing */}
                    </TableTdUser>
                    <TableTdDate>2 Jun 2021</TableTdDate> {/* missing */}
                    <TableTdAmount>$122.00</TableTdAmount>{/* missing */}
                    <TableTdStatus><Button type='Pending'>Pending</Button></TableTdStatus> {/* missing */}{/* missing */}
                </TableTr>
                <TableTr>
                    <TableTdUser> {/* missing */}
                        <img src="https://s2.q4cdn.com/470004039/files/images/executive_profiles/tim_cook.png" />
                        <Username>Susan Carol</Username>{/* missing */}
                    </TableTdUser>
                    <TableTdDate>2 Jun 2021</TableTdDate> {/* missing */}
                    <TableTdAmount>$122.00</TableTdAmount>{/* missing */}
                    <TableTdStatus><Button type='Approved'>Approved</Button></TableTdStatus> {/* missing */}{/* missing */}
                </TableTr>
            </Table>
        </WidgetLgContainer>
    );
};

const TableTdUser = styled.td`
    display: flex;
    align-items: center;
    font-weight: 600;
    gap: 10px;

    img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        object-fit: cover;
    }
`

const Username = styled.span`
    
`

const TableTdDate = styled.td`
    font-weight: 300;
`

const TableTdAmount = styled.td`
    font-weight: 300;
`

const TableTdStatus = styled.td`
    
`

const Button = styled.button`
    padding: 5px 7px;
    border: none;
    border-radius: 10px;
    background-color: ${ ({type}) => type === 'Approved' ? '#e5faf2' : type === 'Declined' ? '#fff0f1' : '#ebf1fe' };
    color: ${ ({type}) => type === 'Approved' ? '#3bb077' : type === 'Declined' ? '#d95087' : '#2a7ade' };
`


//////////////////////////////

const WidgetLgContainer = styled.div`
    flex: 2;
    box-shadow: 0 0 15px -10px rgba(0, 0, 0, 0.75);
    padding: 20px;
`;

const Title = styled.h3`
    font-size: 22px;
    font-weight: 600;
`

const Table = styled.table`
    width: 100%;
    border-spacing: 20px;
`

const TableTr = styled.tr`
    
`

const TableTh = styled.th`
    text-align: left;
`

export default WidgetLg;
