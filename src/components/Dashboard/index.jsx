import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { Table, Content, ScrollTable } from "./styles";


const example_docs = [
  {
    name: "Doca 1",
    times: [
      {
        hours: "08:30 - 09:00",
        status: "PENDING",
        shipping_company_name: "BRF S.A",
      },
      {
        hours: "09:00 - 09:30",
        status: "FREE",
        shipping_company_name: "",

      },
      {
        hours: "09:30 - 10:00",
        status: "FREE",
        shipping_company_name: "",

      },
      {
        hours: "10:00 - 10:30",
        status: "COMPLETED",
        shipping_company_name: "BLUEPACK COMERCIO DE EMBALAGENS LTDA",

      },
      {
        hours: "10:30 - 11:00",
        status: "BLOCKED",
        shipping_company_name: "Sedex",
      },
      {
        hours: "11:30 - 12:00",
        status: "FREE",
        shipping_company_name: "",
      }
    ]
  },
  {
    name: "Doca 2",
    times: [
      {
        hours: "08:30 - 09:00",
        status: "FREE",
        shipping_company_name: "",
      },
      {
        hours: "09:00 - 09:30",
        status: "PENDING",
        shipping_company_name: "BRF S.A",

      },
      {
        hours: "09:30 - 10:00",
        status: "FREE",
        shipping_company_name: "PAC",

      },
      {
        hours: "10:00 - 10:30",
        status: "FREE",
        shipping_company_name: "",

      },
      {
        hours: "10:30 - 11:00",
        status: "PENDING",
        shipping_company_name: "Sedex",
      },
      {
        hours: "11:30 - 12:00",
        status: "COMPLETED",
        shipping_company_name: "BLUEPACK COMERCIO DE EMBALAGENS LTDA",
      }
    ]
  },
  {
    name: "Doca 3",
    times: [
      {
        hours: "08:30 - 09:00",
        status: "PENDING",
        shipping_company_name: "BRF S.A",
      },
      {
        hours: "09:00 - 09:30",
        status: "FREE",
        shipping_company_name: "",

      },
      {
        hours: "09:30 - 10:00",
        status: "FREE",
        shipping_company_name: "",

      },
      {
        hours: "10:00 - 10:30",
        status: "COMPLETED",
        shipping_company_name: "BLUEPACK COMERCIO DE EMBALAGENS LTDA",

      },
      {
        hours: "10:30 - 11:00",
        status: "PENDING",
        shipping_company_name: "Sedex",
      },
      {
        hours: "11:30 - 12:00",
        status: "FREE",
        shipping_company_name: "",
      }
    ]
  },
  {
    name: "Doca 4",
    times: [
      {
        hours: "08:30 - 09:00",
        status: "PENDING",
        shipping_company_name: "BRF S.A",
      },
      {
        hours: "09:00 - 09:30",
        status: "FREE",
        shipping_company_name: "",

      },
      {
        hours: "09:30 - 10:00",
        status: "FREE",
        shipping_company_name: "",

      },
      {
        hours: "10:00 - 10:30",
        status: "COMPLETED",
        shipping_company_name: "BLUEPACK COMERCIO DE EMBALAGENS LTDA",

      },
      {
        hours: "10:30 - 11:00",
        status: "BLOCKED",
        shipping_company_name: "Sedex",
      },
      {
        hours: "11:30 - 12:00",
        status: "FREE",
        shipping_company_name: "",
      }
    ]
  },
];

const times = [
  "08:30 - 09:00",
  "09:00 - 09:30",
  "09:30 - 10:00",
  "10:00 - 10:30",
  "10:30 - 11:00",
  "11:30 - 12:00",
]

export function Dashboard({visualizationType}) {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    setDocs(example_docs);
  }, []);


  return (
    <Container maxWidth="xl">
      <Content>
        <Table className="hours_table">
          <thead>
            <tr>
              <th>Horário / Doca</th>
            </tr>
          </thead>
          <tbody>
            {times.map((hour) => (
              <tr key={hour}>
                <td className="hours">
                  {hour}
                </td>
              </tr>
            ))}         
          </tbody>
        </Table>
        <ScrollTable>
          {docs.map((doc) => (
            <Table key={doc.name}>
              <thead>
                <tr>
                  <th className>{doc.name}</th>
                </tr>
              </thead>
              <tbody>
                {doc.times.map(({hours, shipping_company_name, status}) => (
                  <tr key={hours}>
                    <td className={`doc_info ${status}`}>
                      {shipping_company_name}
                    </td>
                  </tr>
                ))}     
              </tbody>
            </Table>
          ))}
        </ScrollTable>
      </Content>

    </Container>
  );
}