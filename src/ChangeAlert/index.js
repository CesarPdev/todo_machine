import React from "react";
import { withStorageListener } from "./withStorageListener";

function ChangeAlert ({ show, toggleShow}) {
    if (show) {
        return <p>Hubo cambios en la página. Recargar por favor</p>;
    } else {
        return <p>Sin cambios</p>
    }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };