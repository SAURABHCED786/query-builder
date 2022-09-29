import React from 'react'
import {
  Page,
  Card,
  Button,
  Grid,
  Tag,
} from '@shopify/polaris'
import { useState } from 'react';
import Rows from './Rows';
import { useEffect } from 'react';
function QueryBuilder({ main, setMain }) {
  const [handleSave, sethandleSave] = useState(false);
  const [tagMsg, settagMsg] = useState("");
  const handleGroupData = () => {
    // setMain([...main, { groupId: Math.floor(Math.random() * 48484874), row: [] }])
    const newGrp = {
      groupId: Math.floor(Math.random() * 48484874), row: [{
        rowId: Math.floor(Math.random() * 48484874),
        sel1: "",
        sel2: "",
        sel3: "",
      }]
    }
    // console.log([...main,newGrp]);
    setMain([...main, newGrp])
  }

  useEffect(() => {
    let str = "";
    main.map(mainData => {
      if (str) {
        str += " OR "
      }
      mainData.row.map(rowValues => {
        if (rowValues.sel1 && rowValues.sel2 && rowValues.sel3) {
          if (str) {
            if (rowValues.sel1 && rowValues.sel2 && rowValues.sel3) {
              str += " AND "
            }
          }
          str += rowValues.sel1 + " " + rowValues.sel2 + " " + rowValues.sel3;
        }
      })
    })
    settagMsg(str);
  })

  return (
    <div>
      <Page title="Query Builder">
        <Card sectioned>
          {tagMsg && (
            <Grid >
              <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 3, lg: 12, xl: 12 }}>
                <Tag >{tagMsg}</Tag>
              </Grid.Cell>
            </Grid>
          )
          }
          {main.map((group) => {
            return (
              <React.Fragment key={group.groupId} >
                {/* <p>{group.groupId}</p> */}
                <Rows group={group} main={main} setMain={setMain} handleSave={handleSave} />
              </React.Fragment>
            )
          }
          )}
          <span className='addGroup'>
            <Button size='slim' outline onClick={handleGroupData} >Add Groups</Button>
          </span>
          <span className='addGroup'>
            <Button size='slim' primary onClick={() => sethandleSave(true)} >Save</Button>
          </span>
        </Card>
      </Page>
    </div >
  )
}

export default QueryBuilder
