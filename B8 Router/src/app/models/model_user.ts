export class user{
    constructor(
        public id:number,
        public ho_ten:string,
        public email:string,
        public ngay_sinh:string,
        public tai_khoan:string,
        public mat_khau:string,
        public noi_sinh:string
    ){}
}

export class user_contact{
    constructor(
        public ho_ten:string,
        public email:string,
        public mobile:string,
        public subject:string
    ){}
}