import React from 'react'
import {
  Page,
  Card,
  Stack,
  FormLayout,
  TextField,
  InlineError,
  Select,
  Button,
  Grid,
  Tag,
} from '@shopify/polaris'
import { useState, useCallback } from 'react';
function QueryBuilder() {
  const [addRow, setAddRow] = useState(
    [{
      rowId: "",
      sel1: "",
      sel2: "",
      sel3: "",
      inpt: "",
    },]);
  console.log(addRow);
  const addHandelRowAdd = () => {
    setAddRow([...addRow, {
      rowId: "",
      sel1: "",
      sel2: "",
      sel3: "",
      inpt: "",
    },]);
  }

  const addHandelRowRemove = (index) => {
    const rowlist = [...addRow];
    rowlist.splice(index, 1);
    setAddRow(rowlist);
  }

  const handelInputChange = (value, index) => {
    const tempArr = [...addRow];
    tempArr[index]['inpt'] = value;
    setAddRow([...tempArr]);
  }

  const handleSelect1 = (value, index) => {
    const tempArr = [...addRow];
    tempArr[index]['sel1'] = value;
    setAddRow([...tempArr]);
  }
  const handleSelect2 = (value, index) => {
    const tempArr = [...addRow];
    tempArr[index]['sel2'] = value;
    setAddRow([...tempArr]);
  }
  const handleSelect3 = (value, index) => {
    const tempArr = [...addRow];
    tempArr[index]['sel3'] = value;
    setAddRow([...tempArr]);
  }

  const options2 = [
    { label: 'Contains', value: 'contains' },
    { label: 'Equals', value: 'equals' },
    { label: 'Not Contains', value: 'notContains' },
  ];
  return (
    <div>
      <Page title="Query Builder">
        <Card sectioned>
          <Grid >
            <Grid.Cell columnSpan={{ xs: 6, sm: 2, md: 2, lg: 2, xl: 2 }}>
              <Tag>Hello Saurabh</Tag>
            </Grid.Cell>
          </Grid>
          <Card sectioned>
            <Stack vertical spacing="extraTight">
              <FormLayout>
                {addRow.map((singleRow, index) => {
                  return (
                    <FormLayout.Group key={index} condensed>
                      <Select
                        label="Select Box 1"
                        placeholder="Select"
                        options={['A', 'B', 'C', 'D']}
                        value={singleRow?.sel1}
                        onChange={(e) => {
                          handleSelect1(e, index)
                        }}
                        error={''}
                      />
                      <Select
                        label="Select Box 2"
                        placeholder="Select"
                        options={options2}
                        value={singleRow?.sel2}
                        onChange={(e) => {
                          handleSelect2(e, index)
                        }}
                        error={''}
                      />
                      {
                        singleRow?.sel2 === 'equals' ? (
                          <Select
                            label="Select Box 2"
                            placeholder="Select"
                            options={['A', 'B', 'C', 'D']}
                            value={singleRow?.sel3}
                            onChange={(e) => {
                              handleSelect3(e, index)
                            }}
                            error={''}
                          />
                        ) : (
                          <TextField
                            id='inputVal'
                            name='inputVal'
                            label="Input Field"
                            type="text"
                            value={singleRow?.inpt}

                            onChange={(e) => {
                              handelInputChange(e, index)
                            }}
                            error={''}
                            autoComplete="off"
                          />
                        )

                      }

                      {addRow.length > 1 && (
                        <Grid >
                          <Grid.Cell columnSpan={{ xs: 2, sm: 1, md: 12, lg: 6, xl: 11 }}>
                            <div className='delBtn'>
                              <Button onClick={() => addHandelRowRemove(index)} destructive>Delete</Button>
                            </div>
                          </Grid.Cell>
                        </Grid>
                      )}
                    </FormLayout.Group>
                  )
                })}
                <Grid >
                  <Grid.Cell columnSpan={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
                    <div className='delBtn'>
                      <Button onClick={addHandelRowAdd} plain>Add Rows</Button>
                    </div>
                  </Grid.Cell>
                </Grid>
              </FormLayout>
              <InlineError message={''} fieldID={''} />
            </Stack>
          </Card>
        </Card>
      </Page>
    </div>
  )
}

export default QueryBuilder
