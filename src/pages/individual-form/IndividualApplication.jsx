import * as React from 'react';
import { Button, Card, Checkbox, Form, Input, Radio, Divider, DatePicker } from 'antd';

const IndivApplicationForm = () => {
  const [trackEvents, setTrackEvents] = React.useState([]);
  const [fieldEvents, setFieldEvents] = React.useState([]);

  const handleEventChange = (name, value, checked) => {
    const totalEvents = trackEvents.length + fieldEvents.length - (name === 'Track Events' ? (checked ? 0 : 1) : 0) - (name === 'Field Events' ? (checked ? 0 : 1) : 0) + (checked ? 1 : 0);
    const trackEventsCount = trackEvents.length - (name === 'Track Events' ? (checked ? 0 : 1) : 0) + (name === 'Track Events' && checked ? 1 : 0);
    const fieldEventsCount = fieldEvents.length - (name === 'Field Events' ? (checked ? 0 : 1) : 0) + (name === 'Field Events' && checked ? 1 : 0);

    if (totalEvents > 3) {
      return;
    }

    if (name === 'Track Events' && trackEventsCount > 2) {
      return;
    }

    if (name === 'Field Events' && fieldEventsCount > 2) {
      return;
    }

    if (name === 'Track Events') {
      if (checked) {
        setTrackEvents([...trackEvents, value]);
      } else {
        setTrackEvents(trackEvents.filter((event) => event !== value));
      }
    } else {
      if (checked) {
        setFieldEvents([...fieldEvents, value]);
      } else {
        setFieldEvents(fieldEvents.filter((event) => event !== value));
      }
    }
  };

  return (
    <Card title="Application Form">
      <Form>
        <Divider />
        <Card title="Personal Information">
          <Form.Item label="First Name">
            <Input />
          </Form.Item>
          <Form.Item label="Last Name">
            <Input />
          </Form.Item>
          <Form.Item label="Team / Department / House">
            <Input />
          </Form.Item>
          <Form.Item label="Competitive Gender">
            <Radio.Group>
              <Radio value="M">Male</Radio>
              <Radio value="F">Female</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Date of Birth">
            <DatePicker />
          </Form.Item>
        </Card>
        <Card title="Events">
          <div>
            <span>Track Events: </span>
            {['100m', '200m', '400m', '800m', '1500m', '5000m', '110m Hurdles(M) / 100m Hurdles(F)', '400m Hurdles(M)'].map((event) => (
              <Checkbox
                key={event}
                checked={trackEvents.includes(event)}
                onChange={(e) => handleEventChange('Track Events', event, e.target.checked)}
              >
                {event}
              </Checkbox>
            ))}
          </div>
          <Divider />
          <div>
            <span>Field Events: </span>
            {['Shot Put', 'Discus', 'Javelin', 'Long Jump', 'High Jump', 'Triple Jump'].map((event) => (
              <Checkbox
                key={event}
                checked={fieldEvents.includes(event)}
                onChange={(e) => handleEventChange('Field Events', event, e.target.checked)}
              >
                {event}
              </Checkbox>
            ))}
          </div>
        </Card>
      </Form>
    </Card>
  );
};

export default IndivApplicationForm;