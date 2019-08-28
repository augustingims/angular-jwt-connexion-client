export interface IGroups {
  id?: string;
  code?: string;
  label?: string;
  rubric?: string;
}

export class Groups implements IGroups {
  constructor(public id?: string, public code?: string, public label?: string, public rubric?: string) {}
}
