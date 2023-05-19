import React, { Fragment } from "react";
import { Button, Steps } from 'antd'

export interface ISteps {
  title: string
  description: string
  fields: string[]
}

export const RjsfStepsFieldTemplate = (props: any) => {
  const {
    TitleField,
    DescriptionField,
    uiSchema,
    // idSchema,
    // required,
    // disabled,
    // readonly,
    // formData,
    // formContext,
    properties,
    schema
  } = props

  const [current, setCurrent] = React.useState(0)

  const next = () => {
    setCurrent(current + 1)
  }

  const prev = () => {
    setCurrent(current - 1)
  }

  const findContent = (name: string) => {
    return properties.find((prop: any) => {
      return prop.name === name
    })
  }

  const stepsContent = {
    'min-height': '200px',
    'margin-top': '16px',
    'padding-top': '80px',
    'text-align': 'center',
    'background-color': '#fafafa',
    border: '1px dashed #e9e9e9',
    'border-radius': '2px'
  }

  const stepAction = {
    'margin-top': '24px'
  }

  const layout: ISteps[] = uiSchema['ui:groups']

  return (
    <fieldset id={props.idSchema.$id}>
      {(props.uiSchema['ui:title'] || props.title) && (
        <TitleField
          id={`${props.idSchema.$id}__title`}
          title={props.title || props.uiSchema['ui:title']}
          required={props.required}
          formContext={props.formContext}
        />
      )}
      {props.description && (
        <DescriptionField
          id={`${props.idSchema.$id}__description`}
          description={props.description}
          formContext={props.formContext}
        />
      )}
      <Steps current={current}>
        {layout?.map((row, index) => {
          return (
            <Steps.Step
              title={row.title}
              description={row.description}
              key={index}
            />
          )
        })}
      </Steps>
      <div style={stepsContent}>
        {layout[current].fields.map((field: string) => {
          if (schema.properties[field]) {
            const element = findContent(field)
            return <div>{element.content}</div>
          }
          // return <></>
          return <Fragment key='any' />
        })}
      </div>
      <div style={stepAction as React.CSSProperties}>
        {current < layout.length - 1 && (
          <Button type='primary' onClick={() => next()}>
            Next
          </Button>
        )}
        {current === layout.length - 1 && (
          <Button
            type='primary'
            onClick={() => console.log('Processing complete!')}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </fieldset>
  )
}
