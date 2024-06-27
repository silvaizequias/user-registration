export class User {
  id: string
  createdAt: Date
  updatedAt: Date
  deletedAt: Date
  softDeleted: boolean
  name: string
  email: string
  emailVerified: Date
  passHash: string
  zipCode: string
  street: string
  complement: string
  district: string
  city: string
  state: string
}
