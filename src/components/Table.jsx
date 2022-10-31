import React from "react";

export default function Table({ heading, data, columns }) {
  return (
    <>
      <h2> {heading} </h2>
      <table width="70%" cellPadding={15}>
        <tbody>
          <tr>
            {columns.map(({ name, key }) => (
              <td key={key}>{name}</td>
            ))}
          </tr>
          {data.map((vehicle) => (
            <tr key={vehicle.carNumber}>
              {columns.map(({ name, key }) => (
                <td key={name}>{vehicle[key] || "N/A"}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
