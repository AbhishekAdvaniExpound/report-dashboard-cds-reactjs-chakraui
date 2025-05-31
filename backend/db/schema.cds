namespace reporting;

entity SalesData {
    key ID       : UUID;
        region   : String;
        product  : String;
        sales    : Decimal(12, 2);
        quantity : Integer;
        date     : Date;
}
