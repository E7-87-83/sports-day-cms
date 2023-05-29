import * as React from 'react';
import { Button, Card, Checkbox, Form, Input, Radio, Divider } from 'antd';

const IndivApplicationForm: React.FC = () => {
    return (
      <Card title="Application Form">
        <Form>
          <Checkbox.Group>
          <Checkbox>100m</Checkbox>
          <Checkbox>200m</Checkbox>
          <Checkbox>400m</Checkbox>
          <Checkbox>800m</Checkbox>
          <Checkbox>1500m</Checkbox>
          <Checkbox>5000m</Checkbox>
          <Checkbox>110m Hurdles(M) / 100m Hurdles(F)</Checkbox>
          <Checkbox>400m Hurdles(M)</Checkbox>
          </Checkbox.Group>
          <Divider />
          <Checkbox.Group>
          <Checkbox>Shot Put</Checkbox>
          <Checkbox>Discus</Checkbox>
          <Checkbox>Javelin</Checkbox>
          <Checkbox>Long Jump</Checkbox>
          <Checkbox>High Jump</Checkbox>
          <Checkbox>Triple Jump</Checkbox>
          </Checkbox.Group>`
        </Form>
      </Card>
    );
}

export default IndivApplicationForm;