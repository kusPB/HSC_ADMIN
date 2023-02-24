import { createInstance } from "../../api/apis";
import { useHistory } from 'react-router-dom';

const Create = () => {
    const history = useHistory();

    const handlerInstanceSubmit = async(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Array.from(formData.entries());
        const formObject = data.reduce((acc, [key, value]) => ({...acc, [key]: value}), {});
        const jsonData = JSON.stringify(formObject);
        
        const token = localStorage.getItem('token');
        
        let result = await createInstance(jsonData, token);
        history.push('/overview');
        console.log(result);
    }

    return (
        <>
            <main>
                <div className="py-5 text-center">
                    <h2>HSC Instanz anlegen</h2>
                    <p className="lead">Anlegen einer neuer HVL Instanz. Eingetragene Daten müssen mit SAP übereinstimmen.
                    </p>
                </div>

                <div className="row g-5">
                    <div className="col-md-5 col-lg-4 order-md-last">
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="text-primary">HSC Instanzen</span>
                        <span className="badge bg-primary rounded-pill">3</span>
                    </h4>
                    <ul className="list-group mb-3">
                        <li className="list-group-item d-flex justify-content-between lh-sm">
                        <div>
                            <h6 className="my-0">atvise</h6>
                            <small className="text-muted">Container</small>
                        </div>
                        <span className="text-muted">3</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between lh-sm">
                        <div>
                            <h6 className="my-0">Can2OPC UA</h6>
                            <small className="text-muted">Container</small>
                        </div>
                        <span className="text-muted">3</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between lh-sm">
                        <div>
                            <h6 className="my-0">Fernwärme OPC UA</h6>
                            <small className="text-muted">Container</small>
                        </div>
                        <span className="text-muted">3</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between lh-sm">
                        <div>
                            <h6 className="my-0">atvise connect</h6>
                            <small className="text-muted">Container</small>
                        </div>
                        <span className="text-muted">2</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between lh-sm">
                        <div>
                            <h6 className="my-0">Management</h6>
                            <small className="text-muted">Container</small>
                        </div>
                        <span className="text-muted">7</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                        <span>Gesamt</span>
                        <strong>18</strong>
                        </li>
                    </ul>

                    <form className="card p-2">
                        <div className="input-group">
                        <input type="text" className="form-control" placeholder="Instanz Name/ID" />
                        <button type="submit" className="btn btn-secondary">Suche</button>
                        </div>
                    </form>
                    </div>


                    <div className="col-md-7 col-lg-8">
                        <h4 className="mb-3">HSC Allgemein</h4>
                        <form className="needs-validation" novalidate onSubmit={handlerInstanceSubmit}>
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <label htmlFor="sap_customer_name" className="form-label">SAP Kundenname</label>
                                    <input type="text" className="form-control" id="sap_customer_name" name="sap_customer_name" placeholder="" required />
                                    <div className="invalid-feedback">
                                    Valid name is required.
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <label htmlFor="sap_customer_num" className="form-label">SAP Kundennummer</label>
                                    <input type="text" className="form-control" id="sap_customer_num" name="sap_customer_num" placeholder="" required />
                                    <div className="invalid-feedback">
                                    Valid id is required.
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <label htmlFor="contact_person" className="form-label">Ansprechpartner</label>
                                    <input type="text" className="form-control" id="contact_person" name="contact_person" placeholder="" required />
                                    <div className="invalid-feedback">
                                    Valid name is required.
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <label htmlFor="contact_email" className="form-label">Kontakt Email</label>
                                    <input type="email" className="form-control" id="contact_email" name="contact_email" placeholder="email@email.com" required />
                                    <div className="invalid-feedback">
                                    Valid name is required.
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <label htmlFor="national" className="form-label">Ländergesellschaft</label>
                                    <select className="form-select" name="national" id="national" required>
                                        <option value="">Auswählen</option>
                                        <option>AT</option>
                                        <option>DE</option>
                                        <option>CH</option>
                                        <option>LI</option>
                                        <option>IT</option>
                                        <option>CCE</option>
                                    </select>
                                    <div className="invalid-feedback">
                                    Valid name is required.
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <label htmlFor="service" className="form-label">Servicelevel</label>
                                    <select className="form-select" id="service" name="service">
                                        <option value="">Auswählen</option>
                                        <option>1</option>
                                        <option>2</option>
                                    </select>
                                    <div className="invalid-feedback">
                                    Valid name is required.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="project_name" className="form-label">Projektname</label>
                                    <div className="input-group has-validation">
                                        <span className="input-group-text">P</span>
                                        <input type="text" className="form-control" id="project_name" name="project_name" placeholder="Username" required />
                                    <div className="invalid-feedback">
                                        Valid name is required.
                                    </div>
                                    </div>
                                </div>


                                <div className="col-12">
                                    <label htmlFor="admin_name" className="form-label">Admin Username</label>
                                    <div className="input-group has-validation">
                                        <span className="input-group-text">@</span>
                                        <input type="text" className="form-control" name="admin_name" id="admin_name" placeholder="Username" required />
                                    <div className="invalid-feedback">
                                        Valid name is required.
                                    </div>
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <label htmlFor="distric_num" className="form-label">Anzahl Fernwärme OPC UA</label>
                                    <input type="text" className="form-control" id="distric_num" name="distric_num" placeholder="" required />
                                    <div className="invalid-feedback">
                                    Valid name is required.
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <label htmlFor="can_num" className="form-label">Anzahl Can2OPC</label>
                                    <input type="text" className="form-control" id="can_num" name="can_num" placeholder="" required />
                                    <div className="invalid-feedback">
                                    Valid name is required.
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <label htmlFor="atvise_connect" className="form-label">atvise connect</label>
                                    <select className="form-select" id="atvise_connect" name="atvise_connect" required>
                                        <option value="">Auswählen</option>
                                        <option>Ja</option>
                                        <option>Nein</option>
                                    </select>
                                    <div className="invalid-feedback">
                                    Valid name is required.
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <label htmlFor="vpn" className="form-label">VPN</label>
                                    <select className="form-select" id="vpn" name="vpn" required>
                                        <option value="">Auswählen</option>
                                        <option>Ja</option>
                                        <option>Nein</option>
                                    </select>
                                    <div className="invalid-feedback">
                                    Valid name is required.
                                    </div>
                                </div>

                                <hr className="my-4" />

                                <div className="col-12">
                                    <label htmlFor="customer_name" className="form-label">Kundenname</label>
                                    <input type="text" className="form-control" id="customer_name" name="customer_name" placeholder="1234 Main St" required />
                                    <div className="invalid-feedback">
                                    Valid name is required.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="email" className="form-label">Email <span className="text-muted">(Optional)</span></label>
                                    <input type="email" className="form-control" id="email" name="email" placeholder="you@example.com" />
                                    <div className="invalid-feedback">
                                    Valid name is required.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="address" className="form-label">Addresse</label>
                                    <input type="text" className="form-control" id="address" name="address" placeholder="1234 Main St" required />
                                    <div className="invalid-feedback">
                                    Valid name is required.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="address_2" className="form-label">Addresse 2 <span className="text-muted">(Optional)</span></label>
                                    <input type="text" className="form-control" id="address_2" name="address_2" placeholder="Apartment or suite" />
                                </div>

                                <div className="col-md-5">
                                    <label htmlFor="country" className="form-label">Land</label>
                                    <select className="form-select" id="country" name="country" required>
                                        <option value="">Auswählen...</option>
                                        <option>AT</option>
                                        <option>DE</option>
                                        <option>CH</option>
                                        <option>LI</option>
                                        <option>IT</option>
                                        <option>CCE</option>
                                    </select>
                                    <div className="invalid-feedback">
                                    Valid name is required.
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <label htmlFor="federal_state" className="form-label">Bundesland</label>
                                    <input type="text" className="form-control" id="federal_state" name="federal_state" placeholder="" required />
                                    <div className="invalid-feedback">
                                    Valid name is required.
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <label htmlFor="postcode" className="form-label">PLZ</label>
                                    <input type="text" className="form-control" id="postcode" name="postcode" placeholder="" required />
                                    <div className="invalid-feedback">
                                    Valid name is required.
                                    </div>
                                </div>
                            </div>

                            <hr className="my-4" />

                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="active" name="active" />
                                <label className="form-check-label" htmlFor="active">Instanz aktiv</label>
                            </div>

                            <hr className="my-4" />

                            <h4 className="mb-3">Laufzeit (nicht aktiv)</h4>

                            <hr className="my-4" />

                            <button className="w-100 btn btn-primary btn-lg" type="submit">HSC Instanz anlegen</button>
                        </form>
                    </div>
                </div>
            </main> 
        </>
    )
}

export default Create;