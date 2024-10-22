import { CompanyStatus } from "./company.enum"

export interface Company
{
     page_number:number,
     kind: string,
     total_results: number,
     items: CompanyItem[],
}

export interface CompanyItem
{
    company_status: string,
    address_snippet: string,
    date_of_creation: Date,
    matches: CompanyMatches,
    description: string,
    links: CompanyLinks,
    company_number: string,
    title: string,
    company_type: string,
    address: CompanyAddress,
    kind: string,
    description_identifier: string[]
}

export interface CompanyLinks
{
    self: string
}

export interface CompanyMatches
{
    title: number[]
}

export interface CompanyAddress
{
    premises: string,
    postal_code: string,
    country: string,
    locality: string,
    address_line_1: string
}

export interface CompanyOfficers
{
    etag: string,
    links: CompanyLinks,
    kind: string,
    items_per_page: number,
    items: OfficerDetails[]
}

export interface OfficerDetails
{
    address: CompanyAddress,
    name: string,
    appointed_on: Date,
    officer_role: string,
    links: OfficerLinks,
    date_of_birth: DateOfBirth,
    occupation: string,
    country_of_residence: string,
    nationality: string
}

export interface OfficerLinks
{
    officer: AppointmentLink
}

export interface AppointmentLink
{
    appointments: string
}

export interface DateOfBirth{
    month: number,
    year: string
}