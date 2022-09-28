import React, { useEffect } from 'react'
import {
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
import { DeleteMajor } from '@shopify/polaris-icons';
import { useState } from 'react';

function Rows({ main, setMain, group, handleSave }) {

  const [sel1, setSel1] = useState("");
  const [sel2, setSel2] = useState("");
  const [sel3, setSel3] = useState("");
  const [errorSal1, setErrorSal1] = useState(false);
  const [errorSal2, setErrorSal2] = useState(false);
  const [errorSal3, setErrorSal3] = useState(false);
  const [addRow, setAddRow] = useState(
    [
      {
        rowId: Math.floor(Math.random() * 48484874),
        sel1: "",
        sel2: "",
        sel3: "",
      }
    ]
  );

  const addHandelRowAdd = () => {
    setAddRow(
      [...addRow,
      {
        rowId: Math.floor(Math.random() * 48484874),
        sel1: "",
        sel2: "",
        sel3: "",
      }
      ]
    )
  }

  useEffect(() => {
    const newData = main.map(grp => {
      // console.log(grp,"mygrp");
      if (grp.groupId === group.groupId) return { ...grp, row: addRow }
      return grp;
    })
    // console.log(newData);
    setMain(newData)
  }, [addRow])



  const handelGroupRemove = (g) => {
    const updated = main.filter(rm => rm.groupId !== g)
    console.log(updated, "updated");
    setMain([...updated])
  }

  const addHandelRowRemove = (index) => {
    const rowlist = [...addRow];
    rowlist.splice(index, 1);
    setAddRow(rowlist);
  }

  const handleSelect1 = (value, index) => {
    // console.log(value,"val");
    setSel1(value);
    const newRow = addRow.map(row => {
      if (row.rowId === index) return { ...row, sel1: value }
      return row
    })
    setAddRow(newRow)
  }
  const handleSelect2 = (value, index) => {
    // console.log(value,"val");
    setSel2(value);
    const newRow = addRow.map(row => {
      if (row.rowId === index) return { ...row, sel2: value }
      return row
    })
    setAddRow(newRow)
  }
  const handleSelect3 = (value, index) => {
    // console.log(value,"val");
    setSel3(value);
    const newRow = addRow.map(row => {
      if (row.rowId === index) return { ...row, sel3: value }
      return row
    })
    setAddRow(newRow)
  }

  useEffect(() => {
    if (handleSave) {
      main.forEach(rows => {
        rows.row.forEach(rowData => {
          if (rowData.sel1 === "") {
            setErrorSal1(true);
          } else if (rowData.sel1 !== "") {
            setErrorSal1(false);
          }
          if (rowData.sel2 === "") {
            setErrorSal2(true);
          } else if (rowData.sel2 !== "") {
            setErrorSal2(false);
          }
          if (rowData.sel3 === "") {
            setErrorSal3(true);
          } else if (rowData.sel3 !== "") {
            setErrorSal3(false);
          }
        })
      });
    }
  })


  const options2 = [
    { label: 'Contains', value: 'contains' },
    { label: 'Equals', value: 'equals' },
    { label: 'Not Contains', value: 'notContains' },
  ];
  return (
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
                {/* <p>{singleRow.rowId}</p> */}
                <Card sectioned>
                  <Grid>
                    <Grid.Cell columnSpan={{ xs: 2, sm: 2, md: 2, lg: 4, xl: 4 }}>
                      <Select
                        label="Select Box 1"
                        placeholder="Select"
                        options={['A', 'B', 'C', 'D']}
                        value={singleRow.sel1}
                        onChange={(e) => {
                          handleSelect1(e, singleRow.rowId)
                        }}
                        error={errorSal1}
                      />
                    </Grid.Cell>
                    <Grid.Cell columnSpan={{ xs: 2, sm: 2, md: 2, lg: 4, xl: 4 }}>
                      <Select
                        label="Select Box 2"
                        placeholder="Select"
                        options={options2}
                        value={singleRow.sel2}
                        onChange={(e) => {
                          handleSelect2(e, singleRow.rowId)
                        }}
                        error={errorSal2}
                      />
                    </Grid.Cell>
                    {
                      singleRow.sel2 === 'equals' ? (
                        <Grid.Cell columnSpan={{ xs: 1, sm: 1, md: 1, lg: 3, xl: 3 }}>
                          <Select
                            label="Select Box 2"
                            placeholder="Select"
                            options={['A', 'B', 'C', 'D']}
                            value={singleRow.sel3}
                            onChange={(e) => {
                              handleSelect3(e, singleRow.rowId)
                            }}
                            error={errorSal3}
                          />
                        </Grid.Cell>
                      ) : (
                        <Grid.Cell columnSpan={{ xs: 1, sm: 1, md: 1, lg: 3, xl: 3 }}>
                          <TextField
                            id='inputVal'
                            name='inputVal'
                            label="Input Field"
                            type="text"
                            value={singleRow.sel3}
                            onChange={(e) => {
                              handleSelect3(e, singleRow.rowId)
                            }}
                            error={errorSal3}
                            autoComplete="off"
                          />
                        </Grid.Cell>
                      )
                    }
                    {addRow.length > 1 && (
                      <Grid.Cell columnSpan={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1 }}>
                        <div className='delBtn'>
                          <Button onClick={() => addHandelRowRemove(index)} icon={DeleteMajor}></Button>
                        </div>
                      </Grid.Cell>
                    )}
                  </Grid>
                  {addRow.length - 1 === index && (
                    <Grid >
                      <Grid.Cell columnSpan={{ xs: 2, sm: 2, md: 6, lg: 3, xl: 3 }}>
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
          <div className='groupBtn'>
            {main.length > 1 && (
              <span style={{ color: '#bf0711' }} className="rmoGroup">
                <Button outline monochrome size='slim' onClick={() => handelGroupRemove(group.groupId)} >Remove Groups</Button>
              </span>
            )}
          </div>
        </Grid.Cell>
      </Grid>
    </Card>
  )

}

export default Rows
