import { useState, useEffect } from 'react'
import './App.css'

interface User
{
    id: 1;
    firstName: "Terry";
    lastName: "Medhurst";
    maidenName: "Smitham";
    age: 50;
    gender: "male";
    email: "atuny0@sohu.com";
    phone: "+63 791 675 8914";
    username: "atuny0";
    password: "9uQFF1Lh";
    birthDate: "2000-12-25";
    image: "https://robohash.org/Terry.png?set=set4";
    bloodGroup: "A-";
    height: 189;
    weight: 75.4;
    eyeColor: "Green";
    hair: {
        color: "Black";
        type: "Strands"
    };
    domain: "slashdot.org";
    ip: "117.29.86.254";
    address: {
        address: "1745 T Street Southeast";
        city: "Washington";
        coordinates: {
            lat: 38.867033;
            lng: -76.979235
        };
        postalCode: "20020";
        state: "DC"
    };
    macAddress: "13:69:BA:56:A3:74";
    university: "Capitol University";
    bank: {
        cardExpire: "06/22";
        cardNumber: "50380955204220685";
        cardType: "maestro";
        currency: "Peso";
        iban: "NO17 0695 2754 967"
    };
    company: {
        address: {
            address: "629 Debbie Drive";
            city: "Nashville";
            coordinates: {
                lat: 36.208114;
                lng: -86.58621199999999
            };
            postalCode: "37076";
            state: "TN"
        };
        department: "Marketing";
        name: "Blanda-O'Keefe";
        title: "Help Desk Operator"
    };
    ein: "20-9487066";
    ssn: "661-64-2976";
    userAgent: "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/12.0.702.0 Safari/534.24";
    crypto: {
        coin: "Bitcoin";
        wallet: "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a";
        network: "Ethereum (ERC20)"
    }
}

const UserList: React.FC = () => {
    const [users, setJsonData] = useState<User[]>([]);

    useEffect(() => {
        fetch('users.json')
            .then(response => response.json())
            .then(data => setJsonData(data.users));
    }, []);

    const [showColumns, setShowColumn] = useState<boolean[]>([]);

    const handleCheckboxChange = (columnIndex: number) => {
        const updatedColumns = [...showColumns];
        updatedColumns[columnIndex] = !updatedColumns[columnIndex];
        setShowColumn(updatedColumns);
    };
    return (
        <div className="container">
            <div className="left-column">
                <ul className="checkbox-list">
                    <li><label>
                        <input type="checkbox" checked={showColumns[0]} onChange={() => handleCheckboxChange(0)} />
                        lastName
                    </label></li>
                    <li><label>
                        <input type="checkbox" checked={showColumns[1]} onChange={() => handleCheckboxChange(1)} />
                        maidenName
                    </label></li>
                    <li><label>
                        <input type="checkbox" checked={showColumns[2]} onChange={() => handleCheckboxChange(2)} />
                        age
                    </label></li>
                    <li><label>
                        <input type="checkbox" checked={showColumns[3]} onChange={() => handleCheckboxChange(3)} />
                        gender
                    </label></li>
                    <li><label>
                        <input type="checkbox" checked={showColumns[4]} onChange={() => handleCheckboxChange(4)} />
                        email
                    </label></li>
                    <li><label>
                        <input type="checkbox" checked={showColumns[5]} onChange={() => handleCheckboxChange(5)} />
                        phone
                    </label></li>
                    <li><label>
                        <input type="checkbox" checked={showColumns[6]} onChange={() => handleCheckboxChange(6)} />
                        username
                    </label></li>       
                    <li><label>
                        <input type="checkbox" checked={showColumns[7]} onChange={() => handleCheckboxChange(7)} />
                        password
                    </label></li>   
                    <li><label>
                        <input type="checkbox" checked={showColumns[8]} onChange={() => handleCheckboxChange(8)} />
                        birthDate
                    </label></li>
                    <li><label>
                        <input type="checkbox" checked={showColumns[9]} onChange={() => handleCheckboxChange(9)} />
                        image
                    </label></li>   
                    <li><label>
                        <input type="checkbox" checked={showColumns[10]} onChange={() => handleCheckboxChange(10)} />
                        bloodGroup
                    </label></li>   
                    <li><label>
                        <input type="checkbox" checked={showColumns[11]} onChange={() => handleCheckboxChange(11)} />
                        height
                    </label></li>   
                    <li><label>
                        <input type="checkbox" checked={showColumns[12]} onChange={() => handleCheckboxChange(12)} />
                        weight
                    </label></li>   
                    <li><label>
                        <input type="checkbox" checked={showColumns[13]} onChange={() => handleCheckboxChange(13)} />
                        eyeColor
                    </label></li>   
                    <li><label>
                        <input type="checkbox" checked={showColumns[14]} onChange={() => handleCheckboxChange(14)} />
                        hair
                    </label></li>   
                    <li><label>
                        <input type="checkbox" checked={showColumns[15]} onChange={() => handleCheckboxChange(15)} />
                        domain
                    </label></li>   
                    <li><label>
                        <input type="checkbox" checked={showColumns[16]} onChange={() => handleCheckboxChange(16)} />
                        ip
                    </label></li>   
                    <li><label>
                        <input type="checkbox" checked={showColumns[17]} onChange={() => handleCheckboxChange(17)} />
                        address
                    </label></li>   
                    <li><label>
                        <input type="checkbox" checked={showColumns[18]} onChange={() => handleCheckboxChange(18)} />
                        macAddress
                    </label></li>   
                    <li><label>
                        <input type="checkbox" checked={showColumns[19]} onChange={() => handleCheckboxChange(19)} />
                        university
                    </label></li>   
                    <li><label>
                        <input type="checkbox" checked={showColumns[20]} onChange={() => handleCheckboxChange(20)} />
                        bank
                    </label></li>   
                    <li><label>
                        <input type="checkbox" checked={showColumns[21]} onChange={() => handleCheckboxChange(21)} />
                        company
                    </label></li>   
                    <li><label>
                        <input type="checkbox" checked={showColumns[22]} onChange={() => handleCheckboxChange(22)} />
                        ein
                    </label></li>   
                    <li><label>
                        <input type="checkbox" checked={showColumns[23]} onChange={() => handleCheckboxChange(23)} />
                        ssn
                    </label></li>
                    <li><label>
                        <input type="checkbox" checked={showColumns[24]} onChange={() => handleCheckboxChange(24)} />
                        userAgent
                    </label></li>
                    <li><label>
                        <input type="checkbox" checked={showColumns[25]} onChange={() => handleCheckboxChange(25)} />
                        crypto
                    </label></li>   
                </ul>
            </div>
            <div>
                <table border={1}>
                    <thead>
                        <tr>
                            <th rowSpan={4}>id</th>
                            <th rowSpan={4}>firstName</th>
                            {showColumns[0] && <th rowSpan={4}>lastName</th>}
                            {showColumns[1] && < th rowSpan={4}>maidenName</th>}
                            {showColumns[2] && < th rowSpan={4}>age</th>}
                            {showColumns[3] && < th rowSpan={4}>gender</th>}
                            {showColumns[4] && < th rowSpan={4}>email</th>}
                            {showColumns[5] && < th rowSpan={4}>phone</th>}
                            {showColumns[6] && < th rowSpan={4}> username</th >}
                            {showColumns[7] && < th rowSpan={4}> password</th >}
                            {showColumns[8] && <th rowSpan={4}>birthDate</th>}
                            {showColumns[9] && <th rowSpan={4}>image</th>}
                            {showColumns[10] && <th rowSpan={4}>bloodGroup</th>}
                            {showColumns[11] && <th rowSpan={4}>height</th>}
                            {showColumns[12] && <th rowSpan={4}>weight</th>}
                            {showColumns[13] && <th rowSpan={4}>eyeColor</th>}
                            {showColumns[14] && <th rowSpan={3} colSpan={2}>hair</th>}
                            {showColumns[15] && <th rowSpan={4}>domain</th>}
                            {showColumns[16] && <th rowSpan={4}>ip</th>}
                            {showColumns[17] && <th rowSpan={2} colSpan={6}>address</th>}
                            {showColumns[18] && <th rowSpan={4}>macAddress</th>}
                            {showColumns[19] && <th rowSpan={4}>university</th>}
                            {showColumns[20] && <th rowSpan={3} colSpan={5}>bank</th>}
                            {showColumns[21] && <th rowSpan={1} colSpan={9}>company</th>}
                            {showColumns[22] && <th rowSpan={4}>ein</th>}
                            {showColumns[23] && <th rowSpan={4}>ssn</th>}
                            {showColumns[24] && <th rowSpan={4}>userAgent</th>}
                            {showColumns[25] && <th rowSpan={3} colSpan={3}>crypto</th>}
                        </tr>
                        <tr>
                            {showColumns[21] && <th colSpan={6}>address</th>}
                            {showColumns[21] && <th rowSpan={3}>department</th>}
                            {showColumns[21] && <th rowSpan={3}>name</th>}
                            {showColumns[21] && <th rowSpan={3}>title</th>}
                        </tr>
                        <tr>
                            {showColumns[17] && <th rowSpan={2}>address</th>}
                            {showColumns[17] && <th rowSpan={2}>city</th>}
                            {showColumns[17] && <th colSpan={2}>coordinates</th>}
                            {showColumns[17] && <th rowSpan={2}>postalCode</th>}
                            {showColumns[17] && <th rowSpan={2}>state</th>}
                            
                            {showColumns[21] && <th rowSpan={2}>address</th>}
                            {showColumns[21] && <th rowSpan={2}>city</th>}
                            {showColumns[21] && <th colSpan={2}>coordinates</th>}
                            {showColumns[21] && <th rowSpan={2}>postalCode</th>}
                            {showColumns[21] && <th rowSpan={2}>state</th>}
                        </tr>
                        <tr>
                            {showColumns[14] && <th>color</th>}
                            {showColumns[14] && <th>type</th>}

                            {showColumns[17] && <th>lat</th>}
                            {showColumns[17] && <th>lng</th>}

                            {showColumns[20] && <th>cardExpire</th>}
                            {showColumns[20] && <th>cardNumber</th>}
                            {showColumns[20] && <th>cardType</th>}
                            {showColumns[20] && <th>currency</th>}
                            {showColumns[20] && <th>iban</th>}

                            {showColumns[21] && <th>lat</th>}
                            {showColumns[21] && <th>lng</th>}

                            {showColumns[25] && <th>coin</th>}
                            {showColumns[25] && <th>wallet</th>}
                            {showColumns[25] && <th>network</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.firstName}</td>
                                {showColumns[0] && <td>{user.lastName}</td>}
                                {showColumns[1] && <td>{user.maidenName}</td>}
                                {showColumns[2] && <td>{user.age}</td>}
                                {showColumns[3] && <td>{user.gender}</td>}
                                {showColumns[4] && <td>{user.email}</td>}
                                {showColumns[5] && <td>{user.phone}</td>}
                                {showColumns[6] && <td>{user.username}</td>}
                                {showColumns[7] && <td>{user.password}</td>}
                                {showColumns[8] && <td>{user.birthDate}</td>}
                                {showColumns[9] && <td><img src={user.image}></img></td>}
                                {showColumns[10] && <td>{user.bloodGroup}</td>}
                                {showColumns[11] && <td>{user.height}</td>}
                                {showColumns[12] && <td>{user.weight}</td>}
                                {showColumns[13] && <td>{user.eyeColor}</td>}
                                {showColumns[14] && <td>{user.hair.color}</td>}
                                {showColumns[14] && <td>{user.hair.type}</td>}
                                {showColumns[15] && <td>{user.domain}</td>}
                                {showColumns[16] && <td>{user.ip}</td>}
                                {showColumns[17] && <td>{user.address.address}</td>}
                                {showColumns[17] && <td>{user.address.city}</td>}
                                {showColumns[17] && <td>{user.address.coordinates.lat}</td>}
                                {showColumns[17] && <td>{user.address.coordinates.lng}</td>}
                                {showColumns[17] && <td>{user.address.postalCode}</td>}
                                {showColumns[17] && <td>{user.address.state}</td>}
                                {showColumns[18] && <td>{user.macAddress}</td>}
                                {showColumns[19] && <td>{user.university}</td>}
                                {showColumns[20] && <td>{user.bank.cardExpire}</td>}
                                {showColumns[20] && <td>{user.bank.cardNumber}</td>}
                                {showColumns[20] && <td>{user.bank.cardType}</td>}
                                {showColumns[20] && <td>{user.bank.currency}</td>}
                                {showColumns[20] && <td>{user.bank.iban}</td>}
                                {showColumns[21] && <td>{user.company.address.address}</td>}
                                {showColumns[21] && <td>{user.company.address.city}</td>}
                                {showColumns[21] && <td>{user.company.address.coordinates.lat}</td>}
                                {showColumns[21] && <td>{user.company.address.coordinates.lng}</td>}
                                {showColumns[21] && <td>{user.company.address.postalCode}</td>}
                                {showColumns[21] && <td>{user.company.address.state}</td>}
                                {showColumns[21] && <td>{user.company.department}</td>}
                                {showColumns[21] && <td>{user.company.name}</td>}
                                {showColumns[21] && <td>{user.company.title}</td>}
                                {showColumns[22] && <td>{user.ein}</td>}
                                {showColumns[23] && <td>{user.ssn}</td>}
                                {showColumns[24] && <td>{user.userAgent}</td>}
                                {showColumns[25] && <td>{user.crypto.coin}</td>}
                                {showColumns[25] && <td>{user.crypto.wallet}</td>}
                                {showColumns[25] && <td>{user.crypto.network}</td>}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default UserList
