import xmlrpc from "xmlrpc";
import Odoo from "../enums/odoo";
import odooDTO from "./dto/odooDto";

export default class OdooCreateRepository {
    public execute(params:odooDTO) {
        const models = xmlrpc.createClient({ url: Odoo.odooUrl + '/xmlrpc/2/object' });
        
        const db = Odoo.odooDb;
        const password = Odoo.odooPassword;

             models.methodCall('execute_kw', [
                db,
                params.uid,
                password,
                params.endpoint,
                "create",
                [params.data]
                ], 
                
                (err, orderId) => {
                if (err) {
                    console.error('Failed to create order:', err);
                } else {
                    console.log('Order created successfully. Order ID:', orderId);
                }
                });
    }
}