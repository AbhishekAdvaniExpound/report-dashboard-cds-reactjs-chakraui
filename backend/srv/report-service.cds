using {reporting as db} from '../db/schema';

service ReportService {
    @readonly  @rest
    entity Sales as projection on db.SalesData;

    @rest
    function getKPI(region : String, from : Date, to : Date) returns {
        totalSales    : Decimal(12, 2);
        totalQuantity : Integer
    };
}
