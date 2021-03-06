/* tslint:disable */

import { ConcreteFragment } from "relay-runtime";
import { GridItem_artwork$ref } from "./GridItem_artwork.graphql";
declare const _ArtworkGrid_artworks$ref: unique symbol;
export type ArtworkGrid_artworks$ref = typeof _ArtworkGrid_artworks$ref;
export type ArtworkGrid_artworks = {
    readonly edges: ReadonlyArray<({
        readonly node: ({
            readonly __id: string;
            readonly image: ({
                readonly aspect_ratio: number | null;
            }) | null;
            readonly " $fragmentRefs": GridItem_artwork$ref;
        }) | null;
    }) | null> | null;
    readonly " $refType": ArtworkGrid_artworks$ref;
};



const node: ConcreteFragment = {
  "kind": "Fragment",
  "name": "ArtworkGrid_artworks",
  "type": "ArtworkConnection",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "edges",
      "storageKey": null,
      "args": null,
      "concreteType": "ArtworkEdge",
      "plural": true,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "node",
          "storageKey": null,
          "args": null,
          "concreteType": "Artwork",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "__id",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "image",
              "storageKey": null,
              "args": null,
              "concreteType": "Image",
              "plural": false,
              "selections": [
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "aspect_ratio",
                  "args": null,
                  "storageKey": null
                }
              ]
            },
            {
              "kind": "FragmentSpread",
              "name": "GridItem_artwork",
              "args": null
            }
          ]
        }
      ]
    }
  ]
};
(node as any).hash = '54946907e0dd09ddb3b063c64b517438';
export default node;
