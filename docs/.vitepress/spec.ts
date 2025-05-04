export const spec = `---
openapi: 3.1.0
info:
  title: Argentine Rock Legends
  description: |
    The Argentine Rock Legends is an example OpenAPI specification to test OpenAPI tools and libraries. Get all the data for [all artists](#getAllArtists).

    >Inspired by [Scalar Galaxy](https://galaxy.scalar.com/)

    ## Resources

    * https://github.com/enzonotario/vitepress-openapi
    * https://github.com/OAI/OpenAPI-Specification

    ## Markdown Support

    All descriptions *can* contain ~~tons of text~~ **Markdown**. [If GitHub supports the syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax), chances are we’re supporting it, too. You can even create [internal links to reference endpoints](#createArtist).

    <details>
      <summary>Examples</summary>

      **Blockquotes**

      > I love Argentine Rock. <3

      **Tables**

      | Feature          | Availability |
      | ---------------- | ------------ |
      | Markdown Support | ✓            |

      **Accordion**

      \`\`\`html
      <details>
        <summary>Using Details Tags</summary>
        <p>HTML Example</p>
      </details>
      \`\`\`

      **Images**

      Yes, there’s support for images, too!

      ![Placeholder image](https://images.placeholders.dev/?width=1280&height=720)

    </details>
  version: 1.0.0
  contact:
    name: Enzo Notario
    url: https://enzonotario.me
    email: hi@enzonotario.me
servers:
  - url: https://stoplight.io/mocks/enzonotario/argentine-rock/122547792
    description: Mock Server
security:
  - bearerAuth: []
  - apiKeyHeader: []
tags:
  - name: Authentication
    description: Some endpoints are public, but some require authentication. We provide
      all the required endpoints to create an account and authorize yourself.
  - name: Artists
    description: Everything about Argentine Rock artists
paths:
  "/api/v1/artists":
    get:
      tags:
        - Artists
      summary: Get all artists
      description: Get a list of all legendary Argentine Rock artists and explore
        their contributions to the music scene.
      operationId: getAllArtists
      security:
        - {}
      parameters:
        - "$ref": "#/components/parameters/limit"
        - "$ref": "#/components/parameters/offset"
      responses:
        '200':
          description: OK
          content:
            application/json:
              schema:
                allOf:
                  - type: object
                    properties:
                      data:
                        type: array
                        items:
                          "$ref": "#/components/schemas/Artist"
                  - "$ref": "#/components/schemas/PaginatedResource"
components:
  securitySchemes:
    bearerAuth:
      type: http
      scheme: bearer
    apiKeyHeader:
      type: apiKey
      in: header
      name: X-API-Key
  parameters:
    artistId:
      name: artistId
      in: path
      required: true
      schema:
        type: integer
        format: int64
        examples:
          - 1
    limit:
      name: limit
      in: query
      description: The number of items to return
      required: false
      schema:
        type: integer
        format: int64
        default: 10
    offset:
      name: offset
      in: query
      description: The number of items to skip before starting to collect the result
        set
      required: false
      schema:
        type: integer
        format: int64
        default: 0
  responses:
    BadRequest:
      description: Bad Request
      content:
        application/json:
          schema:
            "$ref": "#/components/schemas/Error"
    Forbidden:
      description: Forbidden
      content:
        application/json:
          schema:
            "$ref": "#/components/schemas/Error"
    NotFound:
      description: NotFound
      content:
        application/json:
          schema:
            "$ref": "#/components/schemas/Error"
  schemas:
    Artist:
      type: object
      required:
        - id
        - name
      properties:
        id:
          type: integer
          format: int64
          examples:
            - 1
          x-variable: artistId
        name:
          type: string
          examples:
            - Charly García
        description:
          type:
            - string
            - 'null'
          examples:
            - One of the most influential rock musicians in Argentine history.
        image:
          type: string
          nullable: true
          examples:
            - https://cdn.rock-legends.com/photos/charly.jpg
        band:
          type: string
          examples:
            - Sui Generis
    PaginatedResource:
      type: object
      properties:
        meta:
          type: object
          properties:
            limit:
              type: integer
              format: int64
              examples:
                - 10
            offset:
              type: integer
              format: int64
              examples:
                - 0
            total:
              type: integer
              format: int64
              examples:
                - 100
            next:
              type:
                - string
                - 'null'
              examples:
                - "/artists?limit=10&offset=10"
    Error:
      type: object
      description: RFC 7807 (https://datatracker.ietf.org/doc/html/rfc7807)
      properties:
        type:
          type: string
          examples:
            - https://example.com/errors/generic-error
        title:
          type: string
          examples:
            - Something went wrong here.
        status:
          type: integer
          format: int64
          examples:
            - 403
        detail:
          type: string
          examples:
            - Unfortunately, we can’t provide further information.`

export default spec