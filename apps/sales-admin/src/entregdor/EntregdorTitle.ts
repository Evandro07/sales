import { Entregdor as TEntregdor } from "../api/entregdor/Entregdor";

export const ENTREGDOR_TITLE_FIELD = "id";

export const EntregdorTitle = (record: TEntregdor): string => {
  return record.id || String(record.id);
};
