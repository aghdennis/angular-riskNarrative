
export class CompanyViewModel
{    
    public name? : string;
    public number?: string;
    public dateIncorporated?: Date;
    public address?: string;
    public type?: string;
    public status? : string;
}

export class OfficerViewModel
{  
    public companyNumber?: string;     
    public companyName?: string;  
    public officers?: OfficerDetailViewModel[];  
    
    constructor(){
        this.officers = new Array<OfficerDetailViewModel>();
    }
}

export class OfficerDetailViewModel
{
    public name?: string;
    public role?: string;   
}