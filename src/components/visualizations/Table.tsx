import React from 'react';

// Defintely could make this more generic
export type TableHeader = {
  id: string;
  title: string;
  type: 'string' | 'number' | 'date' | 'currency';
};

export type TableCell = string | number;

type TableProps = {
  data: {
    headers: TableHeader[];
    rows: TableCell[][];
  }
};

export const Table: React.FC<TableProps> = ({
  data,
}) => {
  return (
    <table>
      <tr>
        {
          data.headers.map(headers => <th key={headers.id}>{headers.title}</th>)
        }
      </tr>
      {
        data.rows.map(row => (
          <tr>
            {
              row.map((cell, idx) => (
                <td>
                  {
                    (() => {
                      switch(data.headers[idx].type) {
                        case 'date':
                          return Intl.DateTimeFormat('en-US', { dateStyle: 'short' }).format(new Date((cell as string).replace(/-/g, '/'))).replace(/\//g, '-',);
                        case 'currency':
                          return Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(cell as number);
                        case 'number':
                          return Intl.NumberFormat('en-US').format(cell as number);
                        case 'string':
                        default:
                          return cell;
                      }
                    })()
                  }
                </td>
              ))
            }
          </tr>
        ))
      }
    </table>
  )
};