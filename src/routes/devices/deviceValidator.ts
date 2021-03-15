/*********************************************************************
 * Copyright (c) Intel Corporation 2021
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/

import { check } from 'express-validator'

export const metadataQueryValidator = (): any => {
  return [
    check('tags')
      .optional()
      .isString(),
    check('method')
      .optional()
      .isIn(['AND', 'OR'])
      .isString()
  ]
}
