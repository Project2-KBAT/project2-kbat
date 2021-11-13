import React, { useState } from 'react';
import { Form, Input } from 'semantic-ui-react'

export const MovieForm = () => {
    const [title, setTitle] = useState("");

    return (
        <Form>
            <Form.Field>
                <Input
                    placeholder="Title of Movie"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
            </Form.Field>
        </Form>
    );
};