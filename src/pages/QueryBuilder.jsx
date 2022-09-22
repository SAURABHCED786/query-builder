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
            <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 3, lg: 2, xl: 2 }}>
              <Tag>Hello Saurabh</Tag>
            </Grid.Cell>
          </Grid>
          <Stack vertical spacing="extraTight">
            <FormLayout>
              {addRow.map((singleRow, index) => {
                return (
                  <FormLayout.Group key={index} condensed>
                    <Card sectioned>
                      <Grid>
                        <Grid.Cell columnSpan={{ xs: 2, sm: 2, md: 2, lg: 4, xl: 4 }}>
                          <Select
                            label="Select Box 1"
                            placeholder="Select"
                            options={['A', 'B', 'C', 'D']}
                            value={singleRow.sel1}
                            onChange={(e) => {
                              handleSelect1(e, index)
                            }}
                            error={''}
                          />

                        </Grid.Cell>
                        <Grid.Cell columnSpan={{ xs: 2, sm: 2, md: 2, lg: 4, xl: 4 }}>
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
                        </Grid.Cell>
                        <Grid.Cell columnSpan={{ xs: 2, sm: 2, md: 2, lg: 4, xl: 4 }}>
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
                        </Grid.Cell>
                      </Grid>

                      {addRow.length > 1 && (
                        <Grid >
                          <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 6, lg: 12, xl: 12 }}>
                            <div className='delBtn'>
                              <Button onClick={() => addHandelRowRemove(index)} destructive>Delete</Button>
                            </div>
                          </Grid.Cell>
                        </Grid>
                      )}
                      {addRow.length - 1 === index && (
                        <Grid >
                          <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 6, lg: 12, xl: 12 }}>
                            <div className='delBtn'>
                              <Button onClick={addHandelRowAdd} plain>Add Rows</Button>
                            </div>
                          </Grid.Cell>
                        </Grid>
                      )
                      }
                    </Card>
                  </FormLayout.Group>
                )
              })
              }
            </FormLayout>
            <InlineError message={''} fieldID={''} />
          </Stack>
          <Grid >
            <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 6, lg: 12, xl: 12 }}>
              <div className='delBtn'>
                <Button onClick={addHandelRowAdd} primary>Add Grpups</Button>
              </div>
            </Grid.Cell>
          </Grid>
        </Card>
      </Page>
    </div >
  )
}

export default QueryBuilder
