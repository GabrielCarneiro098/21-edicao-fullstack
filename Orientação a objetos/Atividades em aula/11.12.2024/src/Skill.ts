export class Skill {
  private _id: string;
  private _descricao: string;
  private _ativo: boolean;

  constructor(id: string, descricao: string, ativo: boolean) {
    this._id = id;
    this._descricao = descricao;
    this._ativo = ativo;
  }
}
