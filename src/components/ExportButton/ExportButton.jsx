import { exportToXlsx } from '../../services/exportService'

export function ExportButton({ data, filename }) {
  return (
    <button className="export-button" type="button" onClick={() => exportToXlsx(data, filename)}>
      Exportar planilha
    </button>
  )
}
