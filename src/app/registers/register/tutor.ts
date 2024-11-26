import { v4 as uuidv4 } from "uuid";

class Pet {}

export class Tutor {
  private _tutorName: string;
  private _tutorId: string;
  private _tutorCpf: string;
  private _tutorTelephone: string;
  private _tutorAddress: string;
  private _tutorEmail: string;
  private _pets: Pet[];

  constructor(
    name: string,
    cpf: string,
    telephone: string,
    email: string,
    address: string = ""
  ) {
    this._tutorName = name;
    this._tutorId = uuidv4();
    this._tutorCpf = cpf;
    this._tutorTelephone = telephone;
    this._tutorEmail = email;
    this._tutorAddress = address;
    this._pets = [];
  }

  // Getters e Setters para encapsulamento
  public get tutorName(): string {
    return this._tutorName;
  }

  public set tutorName(name: string) {
    this._tutorName = name;
  }

  public get tutorId(): string {
    return this._tutorId;
  }

  public get tutorCpf(): string {
    return this._tutorCpf;
  }

  public set tutorCpf(cpf: string) {
    this._tutorCpf = cpf;
  }

  public get tutorTelephone(): string {
    return this._tutorTelephone;
  }

  public set tutorTelephone(telephone: string) {
    this._tutorTelephone = telephone;
  }

  public get tutorAddress(): string {
    return this._tutorAddress;
  }

  public set tutorAddress(address: string) {
    this._tutorAddress = address;
  }

  public get tutorEmail(): string {
    return this._tutorEmail;
  }

  public set tutorEmail(email: string) {
    this._tutorEmail = email;
  }

  public get pets(): Pet[] {
    return this._pets;
  }

  public addPet(pet: Pet): void {
    this._pets.push(pet);
  }
}
