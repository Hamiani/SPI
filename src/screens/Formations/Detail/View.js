import React from "react";
import get from "lodash/get";
import { Card, Col, Divider, Button, Popconfirm, notification } from "antd";

import Unknown from "../../../Shared/Unknown";
import Loading from "../../../Shared/Loading";

import "./style.css";

const onSuccessCallBack = () =>
  notification.success({ message: "Supprimée avec Succès" });

const onErrorCallBack = () =>
  notification.error({ message: "Une erreur est survenue" });

const View = ({
  formationQuery,
  removeQuery,
  onRemove,
  onUpdate,
  onGoBack,
}) => {
  const { idle, data, loading, errors } = formationQuery;
  const { loading: removeLoading, errors: removeErrors } = removeQuery;

  if (idle || loading) return <Loading />;
  if (errors || removeErrors) return <Unknown />;

  return (
    <div className="container__antd p-top-20">
      <Col span={24}>
        <Card className="card">
          <div className="formation_head_bloc">
            <div>
              <h1 className="h1">Détail De La Formation</h1>
            </div>
            <div className="formation_button_bloc">
              <Button className="back_button" onClick={onGoBack}>
                Retour
              </Button>
              <Button
                className="edit_button"
                onClick={() => onUpdate(get(data, "codeFormation"))}
              >
                Modifier
              </Button>
              <Popconfirm
                placement="topRight"
                title={"Voulez-vous vraiment supprimer cette formation ?"}
                onConfirm={() =>
                  onRemove(data, onSuccessCallBack, onErrorCallBack)
                }
                okText="Confirmer"
                cancelText="Cancel"
              >
                <Button loading={removeLoading} className="delete_button">
                  Supprimer
                </Button>
              </Popconfirm>
            </div>
          </div>

          <Divider />
          <table className="permanent_table">
            <tbody>
              <tr>
                <td className="table_body_td_formation">
                  <h3 className="fw-700"> Code</h3>
                </td>
                <td className="text-start">{get(data, "codeFormation")}</td>
              </tr>
              <tr>
                <td className="table_body_td_formation">
                  <h3 className="fw-700">Début De L'accréditation</h3>
                </td>
                <td className="text-start">
                  {get(data, "debutAccreditation")}
                </td>
              </tr>
              <tr>
                <td>
                  <h3 className="fw-700">Diplôme </h3>
                </td>
                <td className="text-start">{get(data, "diplome")}</td>
              </tr>
              <tr>
                <td>
                  <h3 className="fw-700">Double Diplôme</h3>
                </td>
                <td className="text-start"> {get(data, "doubleDiplome")}</td>
              </tr>
              <tr>
                <td>
                  <h3 className="fw-700">Fin De L'accréditation </h3>
                </td>
                <td className="text-start">{get(data, "finAccreditation")}</td>
              </tr>
              <tr>
                <td>
                  <h3 className="fw-700">Numéro des Années </h3>
                </td>
                <td className="text-start">{get(data, "n0Annee")}</td>
              </tr>
              <tr>
                <td>
                  <h3 className="fw-700">Nom De La Formation </h3>
                </td>
                <td className="text-start">{get(data, "nomFormation")}</td>
              </tr>
            </tbody>
          </table>
        </Card>
      </Col>
    </div>
  );
};

export default View;
