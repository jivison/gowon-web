import { gql, useQuery } from "@apollo/client";
import React from "react";
import { Page } from "./Page";
import { Crown } from "../Crown";
import "../../sass/components/pages/CrownsListPage.sass";

interface Crown {
  artistName: string;
  plays: number;
  user: {
    discordID: string;
  };
}

interface CrownData {
  crownsByServer: Crown[];
}

const CROWNS = gql`
  query {
    crownsByServer(serverID: "742968034926526555") {
      artistName
      plays
      user {
        discordID
      }
    }
  }
`;

export const CrownsListPage = () => {
  const { loading, error, data } = useQuery<CrownData>(CROWNS);

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.log(error);
    return <p>Error :(</p>;
  }

  return (
    <Page title="Gowon | Crowns">
      <h1>Crowns in 742968034926526555</h1>
      <div className="Crowns-list">
        {data!.crownsByServer.map((c) => (
          <Crown artistName={c.artistName} plays={c.plays} />
        ))}
      </div>
    </Page>
  );
};
