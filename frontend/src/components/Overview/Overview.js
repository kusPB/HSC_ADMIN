import { MDBDataTable } from 'mdbreact';
import { useEffect, useState } from 'react';
import { getInstance } from '../../api/apis';
import { useGlobalContext } from "./../context";

const Overview = () => {
    const {
        g_name, setGName,
        g_token, setGToken,
        g_expire, setGExpire
    } = useGlobalContext();

    const [instances, setInstances] = useState();

    useEffect(async() => {
        let token = localStorage.getItem('token');
        let result = await getInstance(token); 
        console.log(result);
        const data = {
        columns: [
                {
                    label: 'HSC ID',
                    field: 'id',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Aktiv',
                    field: 'active',
                    sort: 'asc',
                    format: (value) => value == '1' ? 'Yes' : 'No',
                    width: 270
                },
                {
                    label: 'SAP Nr.',
                    field: 'sap_customer_num',
                    sort: 'asc',
                    width: 200
                },
                {
                    label: 'HVL Anlagennr.',
                    field: 'sap_customer_name',
                    sort: 'asc',
                    width: 100
                },
                {
                    label: 'Lizenztyp',
                    field: 'service',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Projektname',
                    field: 'project_name',
                    sort: 'asc',
                    width: 100
                },
                {
                    label: 'HSC Token',
                    field: 'project_name',
                    sort: 'asc',
                    width: 100
                },
                {
                    label: 'Ländergesellschaft',
                    field: 'national',
                    sort: 'asc',
                    width: 100
                },
                {
                    label: 'Anlagen',
                    field: 'investments',
                    sort: 'asc',
                    width: 100
                },
                {
                    label: 'Instanz',
                    field: 'instance',
                    sort: 'asc',
                    width: 100
                },
                {
                    label: 'Instanz',
                    field: 'instane',
                    sort: 'asc',
                    width: 100
                }
                ],
                rows: result
        };
        console.log('ssssssssssssss', data);
        setInstances(data);
    }, [])
  
    return (
        <main>
            <div className="py-5 text-center">
                <h2>HSC Instanzen</h2>
                <p className="lead">Übersicht aller HovalSupervisor cloud Instanzen. Anzeige abhängig von deinen zugewiesenen
                Rechten.
                </p>
            </div>
            <MDBDataTable
                striped
                bordered
                small
                data={instances}
            />
        </main>

    )
}

export default Overview;