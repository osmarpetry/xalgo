import Table, { RowData } from 'components/Table'
import React from 'react'

function EconomicGroup() {
  const columns: string[] = ['Nome', 'Idade', 'Cidade']
  const data: RowData[] = [
    { Nome: 'João', Idade: 25, Cidade: 'São Paulo' },
    { Nome: 'Maria', Idade: 30, Cidade: 'Rio de Janeiro' },
    { Nome: 'Pedro', Idade: 28, Cidade: 'Belo Horizonte' }
  ]

  return <Table columns={columns} data={data} />
}

export default EconomicGroup
